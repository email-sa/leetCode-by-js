/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * DFS 算法
 * 递归 + 链表 解法
 * 1. 定义路径列表，和nums 共同参与递归
 * 2. 递归函数
 * 2.1 递归的结束条件，满足就返回
 * 2.2 遍历选择列表，排除重复答案
 * 2.3 做选择，将当前选择加入链表
 * 再递归链表和路径列表，撤销选择
 */

var permute = function (nums) {
    let track = [];
    let result = [];
    // 路径：记录在 track 中
    // 选择列表：nums 中不存在于 track 的那些元素
    // 结束条件：nums 中的元素全都在 track 中出现
    const backtrack = (nums, track) => {
        // 满足结束条件的话
        if (track.length === nums.length) {
            result.push([...track]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            let point = nums[i];
            // 不重复数字，排除不正确的答案
            if (track.includes(point)) {
                continue;
            }
            // # 做选择
            // 将该选择再加入选择列表
            track.push(point); // 路径.add(选择)
            // 进入下一层决策树
            backtrack(nums, track);
            // # 撤销选择
            track.pop(point); // 路径.remove(选择)
            // 将该选择从选择列表移除
        }
    };
    backtrack(nums, track);
    return result;
};
// @lc code=end
