/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 【思路】
 * 搜索target出现的开始位置和结束为止
 * 即
 * 找到第一个等于target的index
 * 和第一个大于target的index 在减一即可
 */
var searchRange = function (nums, target) {
    let len = nums.length;
    let result = [-1, -1];
    if (len < 1) {
        return result;
    }
    let left = rightNum(nums, target, true); // 第一个等于的
    let right = rightNum(nums, target, false) - 1; // 第一个大于的
    if (
        left <= right &&
        right <= len &&
        nums[left] === target &&
        nums[right] === target
    ) {
        return [left, right];
    }
    return result;
};
// 寻找第一个大于targe的元素，左侧值，isEqual 是否是寻找等于的值
let rightNum = (nums, target, isEqual) => {
    let len = nums.length,
        left = 0;
    let right = len - 1;
    let res = len;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        let val = nums[mid];
        // 寻找第一个targe和第一个值大于tag的index
        if (val > target || (isEqual && val >= target)) {
            right = mid - 1;
            res = mid;
        } else {
            // 缩小左边界
            left = mid + 1;
        }
    }
    return res;
};
// @lc code=end
