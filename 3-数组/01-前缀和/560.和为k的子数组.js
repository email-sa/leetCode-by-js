/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  * 连续数组的目标和值求解
//  * 采用前缀法，将所有的和求来之后，再找出和目标之一样的和
//  * 时间复杂度 O(N2)
//  * 空间复杂度 O(N)
//  */
// var subarraySum = function (nums, k) {
//     let len = nums.length;
//     let sumNum = new Array(len + 1).fill(0);
//     if (len === 0) {
//         return;
//     }
//     // 数组的前缀和
//     for (let i = 0; i < len; i++) {
//         sumNum[i + 1] = sumNum[i] + nums[i];
//     }
//     let result = 0;
//     // 后一个元素和前一个元素做差 [j..i]
//     for (let i = 1; i <= len; i++) {
//         for (let j = 0; j < i; j++) {
//             // 求差值为k的情况,
//             if (sumNum[i] - sumNum[j] === k) {
//                 result++;
//             }
//         }
//     }
//     return result;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 连续数组的目标和值求解
 * 采用前缀法，将所有的和求来之后，再找出和目标之一样的和
 *   使用map结构记录下来所有的前缀和，和前缀和数组，再和目标和求差，求出目标和一致的几种情况
 * 时间复杂度 O(N)
 * 空间复杂度 O(N)
 */
var subarraySum = function (nums, k) {
    let len = nums.length;
    let sumMap = new Map();
    sumMap.set(0, 1); // 基础情况，值为0的时候

    let sum = 0,
        result = 0;
    // 数组的前缀和
    for (let i = 0; i < len; i++) {
        sum += nums[i]; // 求前缀和
        let cha = sum - k; // 记录和目标的差值，是否出现过
        if (sumMap.has(cha)) {
            result += sumMap.get(cha); // 累加出现的次数
        }
        let index = sumMap.get(sum) || 0; // 存在就去存在的值，否则默认为 1
        sumMap.set(sum, ++index); // 值的出现次数递增
    }
    return result;
};
// @lc code=end
