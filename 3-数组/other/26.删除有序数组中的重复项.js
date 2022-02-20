/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (54.02%)
 * Likes:    2440
 * Dislikes: 0
 * Total Accepted:    953.9K
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,1,2]'
 *
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
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
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 *
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2]
 * 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4
 * 。不需要考虑数组中超出新长度后面的元素。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^4
 * nums 已按升序排列
 *
 *
 *
 *
 */

// @lc code=start

// /**
//  * @param {number[]} nums
//  * @return {number}
//  * js 简易解法 由于是升序排列，当前值和后一个值相比较，相同就删除，即可
//  */
// var removeDuplicates = function (nums) {
//     let len = nums.length;
//     for (let i = 0; i < len; ) {
//         // 值相等就删除元素
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             // 更新数组长度
//             len = nums.length;
//         } else {
//             // 否则就向后移动一位
//             i++;
//         }
//     }
//     return nums.length;
// };
/**
 * @param {number[]} nums
 * @return {number}
 * 算法解法 
 * 快慢指针,记录比较的位置
 *  使用快慢指针发，数组是升序排列
 * 快指针表示遍历数组到达的下标位置
 * 慢指针表示下一个不同元素要填入的下标位置
 * 
 * 当数组nums 的长度大于 0 时，[数组中至少包含一个元素]，在删除重复元素之后也至少剩下一个元素，
 * 因此nums[0] 保持原状即可，从下标 1 开始删除重复元素。
 * 
 * 时间复杂度  O(N) 快慢指最懂移动n次
 * 空间复杂度  O(1)

 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    let slow = 1, // 慢指针表示下一个不同元素要填入的下标位置
        fast = 1; // 快指针表示遍历数组到达的下标位置
    while (fast < len) {
        // 如果值不等，就将fast的值赋值给slow
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};

// @lc code=end
