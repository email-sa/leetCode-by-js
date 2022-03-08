/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 组合/子集
 * 有重复元素，不可复选【DFS】 解法
 *
 * 不可复选
 * 1. 先将数据排序，相同元素就是挨在一起的了
 * 重复的的元素可以重复出现一次
 * 2. 剪枝，i > start && nums[i] === nums[i - 1]
 * 当前元素后面的和自己想通的元素就不加到结果里面了，但是一次次遍历会从当前元素开始，就能得到正确结果
 * 输入 [1,2,2]
 * 输出  [[],[1],[1,2],[1,2,2],[2],[2,2]]
 */
var subsetsWithDup = function (nums) {
    const result = []; // 结果集
    const track = []; // 已访问的轨迹
    nums = nums.sort((a, b) => a - b); // !
    let len = nums.length;
    const DFS = (nums, track, start) => {
        // 结束条件
        result.push([...track]);
        // 继续遍历下一层的元素
        for (let i = start; i < len; i++) {
            // 剪枝丫，一层层遍历即可
            // 过滤掉重复元素
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
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
