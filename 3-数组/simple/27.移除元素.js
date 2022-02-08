/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (59.83%)
 * Likes:    1166
 * Dislikes: 0
 * Total Accepted:    577.5K
 * Total Submissions: 969.4K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 *
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 *
 *
 * 说明:
 *
 * 为什么返回数值是整数，但输出的答案是数组呢?
 *
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 *
 * 你可以想象内部操作如下:
 *
 *
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2]
 * 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而
 * nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2
 * 输出：5, nums = [0,1,4,0,3]
 * 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0,
 * 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * 0
 * 0
 *
 *
 */

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
