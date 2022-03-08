/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列
 * 输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 排列
 * 有重复元素，返回不含重复元素的结果
 * 思路
 * 1. 定义路径和记录访问过元素,结果集合
 * 2. 定义DFS方法 ， for循环
 * 3. 【剪枝的逻辑需要多多注意】
 */
var permuteUnique = function (nums) {
    let result = [],
        tack = [];
    let visited = new Array(nums.length).fill(false); // 对应数组中的索引位置
    // 不重复获取，那就先排序
    nums = nums.sort((a, b) => a - b);
    const DFS = (tack) => {
        // 更新结果// 终止条件
        if (tack.length === nums.length) {
            result.push([...tack]);
            return;
        }
        // 拼接子节点
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) {
                continue;
            }
            // 剪枝丫  // 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置,前一个元素访问过了
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
                continue;
            } // 做选择
            visited[i] = true;
            tack.push(nums[i]);
            // 下一层节点
            DFS(tack);
            // 撤销选择
            visited[i] = false;
            tack.pop(nums[i]);
        }
    };
    DFS(tack);
    return result;
};
// @lc code=end
