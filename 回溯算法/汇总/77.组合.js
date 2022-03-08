/**
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 基本DFS 套路
 *  let result = []; // 结果
    let tack = []; // 路径
    const DFS = () => {
        // 存储结果
        // 同层遍历
        for (let i = 0; i < n; i++) {
            // 剪枝丫
            // 做选择
            // 下一层遍历
            // 撤销选择
        }
    };
    DFS();
    return result;
 * 思路：
    1. 一个区间范围的数字组合，那上限就是 n
    2. 所有可能的 k 个数的组合， 找到长度 k之后，更新结果
    3. 超出 k 的就退出递归
 * 
 */
var combine = function (n, k) {
    let result = []; // 结果
    let tack = []; // 路径
    const DFS = (tack, start) => {
        // 存储结果
        if (tack.length === k) {
            result.push([...tack]);
        }
        if (tack.length > k) {
            return;
        }
        // 同层遍历
        for (let i = start + 1; i <= n; i++) {
            // 剪枝丫 ，更新结果时，剪枝
            // 做选择
            tack.push(i);
            // 下一层遍历
            DFS(tack, i);
            // 撤销选择
            tack.pop(i);
        }
    };
    DFS(tack, 0);
    return result;
};
// @lc code=end
