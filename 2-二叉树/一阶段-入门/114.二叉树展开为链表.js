/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 递归
 * 临界点，的考虑
 * 当前节点需要做什么
 */
//  1. root 的左子树，右子树拉平
//  2. root 的右子树在左子树的下面，然后将整个左子树作为右子树
var flatten = function (root) {
    if (root === null) return;
    flatten(root.left);
    flatten(root.right);

    /**** 后序遍历位置 ****/

    // 1. 所有子树已经拉平
    let left = root.left;
    let right = root.right;
    // 2. 将左子树作为右子树
    root.left = null;
    root.right = left;

    // 3. 原来的右子树接在现在的右子树后面
    let node = root;

    if (root === null) return;
    // 找到现在右子树的末尾 ！！！
    while (node.right !== null) {
        node = node.right;
    }
    // 原来的右子树接在现在的右子树的后面
    node.right = right;
};
// @lc code=end
