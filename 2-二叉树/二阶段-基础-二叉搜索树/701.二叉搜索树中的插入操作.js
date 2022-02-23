/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * 一旦涉及「改」，函数就要返回 TreeNode 类型，并且对递归调用的返回值进行接收
 * 使用递归
 * 循环体: 当前节点的值和目标值比较,较大就是右子树,小就是左子树,若左右子树为空 则添加目标节点
 * 结束条件: 节点为空时
 *
 * 思路: 利用二叉树比较节点值操作(当前节点需要做什么)
 *
 */
var insertIntoBST = function (root, val) {
    // 找到空位置，就插入，满足二叉搜索树
    if (root === null) {
        return new TreeNode(val);
    }
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};
// @lc code=end
