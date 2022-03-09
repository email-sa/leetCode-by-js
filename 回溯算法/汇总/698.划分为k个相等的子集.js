/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

const { memoryUsage } = require("process");

// @lc code=start
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
