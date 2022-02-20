/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=left
// 搜索最左边的满足条件的值 区间是 [left,right]
let left_bound = (nums, target) => {
    if (nums.length == 0) return -1;
    let left = 0;
    let right = nums.length - 1; // 注意
    // 搜索区间为 [left, right]
    while (left <= right) {
        // 注意 此时搜索区间 [right+1, right) 为空
        let mid = Math.floor((right - left) / 2) + left;
        // 找到后，在[left, mid) 中继续搜索
        if (nums[mid] == target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            // 区间是[mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 区间是[left, mid-1],缩小右边界
            right = mid - 1; // 注意
        }
    }
    // left越界的情况
    if (left >= nums.length || nums[left] !== target) {
        return -1;
    }
    return left;
};
// 搜索右边界的值
let right_bound = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    // 搜索区间为 [left, right]
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 收缩左边侧边界
            left = mid + 1;
        }
    }
    // 由于 while 的退出条件是 left == right + 1，所以当 target 比 nums 中所有元素都大时
    // 检查出界情况
    if (right < 0 || nums[right] != target) {
        return -1;
    }
    return right;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路
 * 1. 由于是升序，去中心点的值
 * 2. 值>目标值, 目标值在中心的左边
 * 3. 值<目标值，目标值在中心的右边
 * 不断调整中心点的位求出解
 * 时间复杂度 O（logn）
 * 空间复杂度 O（1）
 */
var search = function (nums, target) {
    let len = nums.length,
        right = len - 1, // 结束节点位置
        left = 0;
    // 搜索区间为空时，退出循环 // right 为最后一个元素索引，所以可相等
    while (left <= right) {
        let center = Math.floor((right - left) / 2) + left; // 防止left+right溢出使用这种表示

        let val = nums[center];
        if (val == target) {
            return center;
        } else if (val > target) {
            // 区间为 [left,center-1]
            right = center - 1; // 缩小右边界
        } else if (val < target) {
            // 区间为 [left+1,right]
            left = center + 1; // 缩小左边界
        }
    }
    return -1;
};
// @lc code=end
