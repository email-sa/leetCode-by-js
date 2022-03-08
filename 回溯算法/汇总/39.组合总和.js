/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
candidates 中的 同一个 数字可以 无限制重复被选取 。
【如果至少一个数字的被选数量不同，则两种组合是不同的】。 
对于给定的输入，保证和为 target 的不同组合数少于 150 个
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 思路：
 * 元素可重复的话，递归的时候就是  DFS(candidates, i, target);
 * 不可重复的话  DFS(candidates, i+1, target); 从下个元素开始，当前元素就不会重复
 *
 * 1. 由于是求目标和为 target，所以 target 需要带到递归中
 * 2. 基础 base，超出/等于的时候结束递归 【DFS】
 */
var combinationSum = function (candidates, target) {
    let result = []; // 结果
    let tack = []; // 路径
    let len = candidates.length;
    const DFS = (arr, start, target) => {
        // 存储结果
        if (target === 0) {
            result.push([...tack]);
            return;
        }
        if (target < 0) {
            return;
        }
        // 同层遍历 // 一个数可以重复选择，那就是不改初始值的遍历
        for (let i = start; i < len; i++) {
            // 剪枝丫 全遍历，不需要剪枝
            // 做选择
            tack.push(arr[i]);
            target -= arr[i];
            // 下一层遍历 不可重复元素的话   DFS(candidates, i+1, target);
            // 可以重复   DFS(candidates, i, target);
            DFS(candidates, i, target);
            // 撤销选择
            tack.pop(arr[i]);
            target += arr[i];
        }
    };
    DFS(candidates, 0, target);
    return result;
};
// @lc code=end
