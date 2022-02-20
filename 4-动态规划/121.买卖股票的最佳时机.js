/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 *
 * 思路
 * 从第0个开始，一直往后，纪录最大差值
 * 返回利润 暴力解法
 * 时间复杂度 O(n^2)
 * 空间复杂度 O1
 */
// var maxProfit = function (prices) {
//     let max_price = 0; // 最大利润

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[i] < prices[j]) {
//                 let max_num = prices[j] - prices[i];
//                 if (max_num > max_price) {
//                     max_price = max_num;
//                 }
//             }
//         }
//     }
//     return max_price;
// };
/**
 *
 * @param {*} prices
 * @returns 最大利润
 * 思路
 * 在最低点买入，记录当天和最低点的差值 prices[i] - minPrice
 */
var maxProfit = function (prices) {
    let min_price = Number.MAX_SAFE_INTEGER; // 最低成本价
    let maxProfit = 0; // 最大利润

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min_price) {
            min_price = prices[i];
        } else if (maxProfit < prices[i] - min_price) {
            maxProfit = prices[i] - min_price;
        }
    }
    return maxProfit;
};
// @lc code=end
