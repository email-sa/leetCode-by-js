/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 * 比较左右子树的最大深度和最小深度的差
 *
 * 分别获取左右字数的高度，作比较，大于1则返回false
 * 递归
 * 终止条件： 节点为空
 * 循环体：比较左右子树的深度差
 */
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let max = maxDeep(root.left);
    let min = maxDeep(root.right);

    let num = Math.abs(max - min) <= 1;
    if (num) {
        let valueL = isBalanced(root.left);
        if (valueL) return isBalanced(root.right);
        else return valueL;
    } else {
        return false;
    }
};

// 获取最大深度
var maxDeep = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDeep(root.left), maxDeep(root.right)) + 1;
};
// @lc code=end
