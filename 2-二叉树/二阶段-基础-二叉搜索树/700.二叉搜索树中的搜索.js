/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 递归解法
 * 利用右大左小的原则搜索
 */
var searchBST = function (root, val) {
    // 找到节点，或者便利完整个树，返回root
    if (root === null || root.val === val) return root;
    return root.val > val
        ? searchBST(root.left, val)
        : searchBST(root.right, val);
};
// @lc code=end
