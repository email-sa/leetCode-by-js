/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 递归
 * 终止条件 开始inde > 结束 index的时候
 * 循环体： 找出最大值，座位当前节点，添加到树中
 */
var constructMaximumBinaryTree = function (nums) {
    return getTree(nums, 0, nums.length - 1);
};
let getTree = function (nums, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return null;
    }
    // ****** 当前节点需要做的事 ********
    let maxVal = -1,
        index = -1;

    for (let i = startIndex; i <= endIndex; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
            index = i;
        }
    }
    let root = new TreeNode(maxVal);
    // ******  ********

    // 前序遍历，生成左右节点
    root.left = getTree(nums, startIndex, index - 1);
    root.right = getTree(nums, index + 1, endIndex);
    return root;
};
// @lc code=end
