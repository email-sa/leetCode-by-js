/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，
 * 找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用 一次 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 有重复元素但是不可复选
 * 【组合的 i 初始随递归而变化】
 * 【剪枝是在递归开始时，更新结果，或者结束递归，或者继续递归】
 *
 * 步骤
 * 1. 定义结果和轨迹变量
 * 2. 定义 DFS 方法，base
 * 3. for 循环
 * 4. 调用 DFS继续递归
 * 5. 返回结果 【DFS】
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    let tack = [];
    let len = candidates.length;
    // 有重复元素，且只使用一次，县排序
    candidates = candidates.sort((a, b) => a - b);
    const DFS = (start, target, tack) => {
        // 更新结果
        if (target === 0) {
            result.push([...tack]);
            return;
        }
        if (target < 0) {
            return;
        }
        // 构建当前节点的子树
        for (let i = start; i < len; i++) {
            // 剪枝，不重复选择，子树中不含和自己相同的元素
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            // 做选择
            target -= candidates[i];
            tack.push(candidates[i]);
            // 下一层的递归
            DFS(i + 1, target, tack); // 元素不重复使用，从 i+1 开始
            // 撤销选择
            target += candidates[i];
            tack.pop(candidates[i]);
        }
    };
    DFS(0, target, tack);
    return result;
};
// @lc code=end
