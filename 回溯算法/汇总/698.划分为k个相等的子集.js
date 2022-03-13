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
// @lc code=end
