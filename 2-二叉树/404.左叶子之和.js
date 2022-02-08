/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  * 递归 返回左叶子节点值 深度优先
//  * 终止条件： 到叶子结点或者节点为空
//  * 循环体 求和每个节点左子树和右子树 左叶子结点的值
//  */
// var sumOfLeftLeaves = function (root) {
//     if (root === null) return 0;
//     if (root.left === null && root.right === null) return 0;
//     let val = 0;
//     if (root.left && root.left.left === null && root.left.right === null) {
//         val = root.left.val;
//     }
//     return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
// };

/**
 * @param {TreeNode} root
 * @return {number}
 * 迭代 返回左叶子节点值 核心是前序排列  广度优先
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    if (root === null) return sum;
    let stack = [];
    while (root || stack.length) {
        while (root) {
            // 返回左叶子结点的值
            if (
                root.left &&
                root.left.left === null &&
                root.left.right === null
            ) {
                sum += root.left.val;
            }
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return sum;
};
// @lc code=end
