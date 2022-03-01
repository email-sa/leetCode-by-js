/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 * 深度遍历  类似前序遍历
 */
var minDepth = function (root) {
    // 如果是节点为空,返回0
    if (root === null) {
        return 0;
    }
    // 没有子节点的节点为叶子节点
    if (root.left === null && root.right === null) {
        return 1;
    }
    // 定义为最大深度值
    let min = 10 ** 5; // 题目限制的节点范围
    // 比较左右子树的深度,哪一个更小
    if (root.left !== null) {
        min = Math.min(minDepth(root.left), min);
    }
    if (root.right !== null) {
        min = Math.min(minDepth(root.right), min);
    }
    return min + 1; // 加上当前节点
};

// @lc code=end
