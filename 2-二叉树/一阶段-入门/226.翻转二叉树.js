/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 * 递归:
 * 终止条件: 节点为空
 * 循环体(当前节点能干什么)
 * 【将二叉树上的左右子节点交换，最后的结果就是翻转后的二叉树】
 翻转二叉树就是翻转左子树，翻转右子树
 再将左右子树交换即可
 前序遍列
 
 */
// var invertTree = function (root) {
//     if (root === null) return null;
//     // 当前节点要做的事
//     // 左右节点交换
//     let temp = invertTree(root.left);
//     root.left = invertTree(root.right);
//     root.right = temp;
//     return root;
// };
var invertTree = function (root) {
    if (root === null) return null;
    // 当前节点要做的事
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    // 让左右子节点继续交换
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
// @lc code=end
