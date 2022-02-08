/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

const { createWriteStream } = require("fs");

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
 * 结果是中序排列
 *
 * 先取中位数，定义根节点 总是选择中间位置左边的数字作为根节点
 * 左子树从0 开始
 * 右子树从len-1开始
 * 左边的index > 右边的时候 说明节点为空
 * 【每次先取到子树的根节点】
 * 根节点的左子树的根节点
 */
var sortedArrayToBST = function (nums) {
    if (!nums) {
        return null;
    }
    return createTree(nums, 0, nums.length - 1);
};
var createTree = function (nums, left, right) {
    if (left > right) {
        return null;
    }
    // 总是选择中间位置左边的数字作为根节点  (left + right) / 2
    // 总是选择中间位置右边的数字作为根节点  (left + right+1) / 2
    let mid = parseInt((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = createTree(nums, left, mid - 1);
    root.right = createTree(nums, mid + 1, right);
    return root;
};

// @lc code=end
