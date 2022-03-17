/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 对于数字而言,每一个数字可以放到任何桶里面
 * 每次遍历改变对应数字
 */
var canPartitionKSubsets = function (nums, k) {
    // 极端情况
    if (nums.length < k) {
        return false;
    }
    let sum = nums.reduce((pre, cur) => cur + pre);
    if (sum % k !== 0) {
        return false;
    }
    let target = sum / k;
    let result = new Array(k).fill(0); // 结果,记录每个桶的和
    // 让数组中的元素大的元素靠前,可以减少递归
    nums = nums.sort((a, b) => b - a);

    const DFS = (nums, index) => {
        // 存储结果 // 结束循环
        if (index === nums.length) {
            // 判断所有的桶是不是符合要求
            for (let i = 0; i < k; i++) {
                if (result[i] !== target) {
                    return false;
                }
            }
            return true; // 成功平分
        }

        // 同层遍历  // 穷举每个桶
        for (let i = 0; i < k; i++) {
            // 剪枝丫 桶装满了的话
            if (result[i] + nums[index] > target) {
                continue;
            }
            // 做选择,选择进哪一个桶
            result[i] += nums[index];
            // 下一层遍历-穷举所有的数字
            if (DFS(nums, index + 1)) {
                return true;
            }
            // 撤销选择
            result[i] -= nums[index];
        }
    };
    return DFS(nums, 0) ? true : false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 从桶的角度出发，每个桶选择可以放得数字
 * 思路：
 * 1. 临界条件的处理
 * 2. 定义备忘录 memo map和二进制存储的 used
 * 3.累加 值，直到等于target，就是满足条件的元素
 */
var canPartitionKSubsets = function (nums, k) {
    if (nums.length < k) return false;
    let sum = nums.reduce((pre, cur) => pre + cur);
    if (sum % k !== 0) {
        return false;
    }
    let target = sum / k;
    let used = 0; // 使用位图技巧
    let memo = new Map(); // 备忘录
    const DFS = (k, bucket, nums, start, used) => {
        // 更新结果,终止递归
        if (k === 0) {
            return true; // 所有桶都被装满了，而且 nums 一定全部用完了
        }
        // 当前桶装满了，继续下一个桶
        if (bucket === target) {
            // 装满当前这个桶，递归穷举下一个桶的选择
            // 让下一个桶从 nums[0]开始
            let res = DFS(k - 1, 0, nums, 0, used);
            // 缓存结果，存储访问过得桶
            memo.set(used, res);
            return res;
        }
        // 去重
        if (memo.has(used)) {
            return memo.get(used); // 避免冗余计算
        }
        // 子节点
        for (let i = start; i < nums.length; i++) {
            // 剪枝
            if (((used >> i) & 1) === 1) {
                // & 对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0
                // 判断第 i 位 是否是1
                // nums[i] 已经被装入别人的桶中，除以2的n次方
                continue;
            }
            if (nums[i] + bucket > target) {
                continue;
            }
            // 做选择
            used |= 1 << i; // 将第 i 位置为 1 // |对应的位中任一个操作数为1 那么结果就是1 除以2的n次方
            bucket += nums[i];
            // 递归穷举下一个数字是否装入当前桶
            if (DFS(k, bucket, nums, i + 1, used)) {
                return true;
            }
            // 撤销选择
            // ^表达式有且只有一个1式为1，其他为0，乘以 2 的n次方
            used ^= 1 << i; // 使用异或运算将第 i 位恢复 0
            bucket -= nums[i];
        }
    };
    return DFS(k, 0, nums, 0, used) ? true : false;
};
// @lc code=end
