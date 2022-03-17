/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 动态规划的临界条件
 * amount <=0 返回 -1
 * 需要硬币的最优解那就是
 * f(10)的最优解+1
 *
 * 比如你想求amount = 11时的最少硬币数（原问题），
 * 如果你知道凑出amount = 10的最少硬币数（子问题），
 * 你只需要把子问题的答案加一（再选一枚面值为 1 的硬币）就是原问题的答案，
 * 因为硬币的数量是没有限制的，子问题之间没有相互制，是互相独立的
 *
 * 【状态】 硬币不限，状态就是 目标金额 amount
 * 【dp备忘录的定义】 dp(n) = n 目标金额n 至少需要 dp(n)个硬币
 * 【选择并择优】
 * 具体到这个问题，无论当的目标金额是多少，
 * 选择就是从面额列表coins中选择一个硬币，然后目标金额就会减少
 *
 * 自底向上
 */

var coinChange = function (coins, amount) {
    let max = amount + 1; // 上限值,硬币数最多 amount
    // 定义dp 备忘录
    let dp = new Array(max).fill(max);
    dp[0] = 0;
    // 求和为总金额的最小硬币数量,i 表示总和值
    for (let i = 0; i < max; i++) {
        // 求所有子问题 +1 的最小值，就和为i的最少 j的个数
        for (let j = 0; j < coins.length; j++) {
            // 子问题无解就返回
            if (i < coins[j]) continue;
            else {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                // dp[i - coins[j]] + 1
                // dp中当前目标值 i - 当前硬币金额 coins[j] 的元素的硬币数加+1 ，就是但前者更数所需的硬币数
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]; // 超出上限就表示，没找到符合要求的，否者就找到了
};
// @lc code=end
