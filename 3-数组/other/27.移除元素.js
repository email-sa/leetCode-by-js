/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * /

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  * 使用快慢指针
//  * 数组可能为空，所以快慢指针从0 开始
//  * 时间复杂度  O(N) 快慢指最多移动n次，编列序列最多两次
//  * 空间复杂度  O(1)
//  */
// var removeElement = function (nums, val) {
//     let len = nums.length;
//     if (len === 0) {
//         return;
//     }
//     let slow = 0, // 慢指针表示下一个不是目标值的元素要填入的下标位置
//         fast = 0; // 快指针表示遍历数组到达的下标位置
//     while (fast < len) {
//         // 将非目标值元素替换到靠前的位置
//         if (nums[fast] !== val) {
//             // let t = nums[slow];
//             nums[slow] = nums[fast];
//             // nums[fast] = t;
//             ++slow; // 慢指针在替换值以后再递增
//         }
//         ++fast; // 快指针不断向后移动
//     }
//     return slow;
// };
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 优化版快慢指针
 * 双指针分为左右指针，分别从收尾开始
 * 时间复杂度  O(N) 其中 n 为序列的长度。我们只需要遍历该序列至多一次
 * 空间复杂度  O(1)
 */
var removeElement = function (nums, val) {
    let len = nums.length;
    if (len === 0) {
        return;
    }
    let left = 0, // 左指针表示下一个不是目标值的元素要填入的下标位置
        right = len; // 右指针表示遍历数组倒序到达的下标位置
    // 相等时刚好遍历数组一次
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            --right;
        } else {
            ++left;
        }
    }
    return left;
};
// @lc code=end
