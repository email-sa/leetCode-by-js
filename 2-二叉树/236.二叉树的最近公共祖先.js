/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 函数是干什么的？
 * 找到最近公共祖先
 *
 * 参数变量是什么
 * 节点的变化
 *
 * 递归结果拿来干什么
 * 以当前节点为根节点，找目标节点，如果找到当前节点就是目标节点否则为null
 */
var lowestCommonAncestor = function (root, p, q) {
    // 终止条件
    if (root === null) return null;
    // 匹配到目标节点就返回目标节点
    if (root === p || root === q) return root;
    // 后序遍历
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // 1. 当前节点的子节点匹配到目标节点-即返回当前节点
    if (left !== null && right !== null) {
        return root;
    }
    // 2. 未匹配到返回null
    if (left === null && right === null) {
        return null;
    }
    // 3. 匹配到任意一个返回其中一个
    return left ? left : right;
};
// @lc code=end
