/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 组合/子集  排列
 * 互不相同，不可复选【DFS】 解法
 */
var subsets = function (nums) {
    const result = []; // 结果集
    const track = []; // 已访问的轨迹
    let len = nums.length;
    const DFS = (nums, track, start) => {
        // 结束条件
        result.push([...track]);
        // 继续遍历下一层的元素
        for (let i = start; i < len; i++) {
            // 剪枝丫 无重复，不需要剪枝丫，一层层遍历即可
            // 做选择
            track.push(nums[i]);
            // 继续下一层的遍历
            DFS(nums, track, i + 1);
            // 撤销选择
            track.pop(nums[i]);
        }
    };
    DFS(nums, track, 0); // 从第一个元素开始
    return result;
};
// @lc code=end
