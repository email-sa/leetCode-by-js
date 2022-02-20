/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

const { pid } = require("process");

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
//  * @return {number[]}
//  * 递归 前序遍历 根节点-左子树-右子数
//  */
// var preorderTraversal = function (root) {
//     let tree = [];
//     preTraver(root, tree);
//     return tree;
// };
// var preTraver = (root, tree) => {
//     if (!root) return;
//     tree.push(root.val);
//     preTraver(root.left, tree);
//     preTraver(root.right, tree);
// };

// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  * 迭代 前序遍历 根节点-左子树-右子数
//  * 终止条件：栈为空或者节点为空
//  *
//  * 循环体：
//  */
// var preorderTraversal = function (root) {
//     let tree = [];
//     if (!root) return tree;
//     let leftStack = [];
//     while (root || leftStack.length) {
//         while (root) {
//             tree.push(root.val);
//             leftStack.push(root);
//             root = root.left;
//         }
//         root = leftStack.pop();
//         root = root.right;
//     }
//     return tree;
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Morris 遍历 前序遍历 根节点-左子树-右子数
 */
var preorderTraversal = function (root) {
    let tree = [];
    if (!root) return tree;
    let p1 = root,
        p2 = null;
    while (p1 !== null) {
        p2 = p1.left;
        if (p2 !== null) {
            // 如果前驱节点的右节点不为空且右节点不等于当前节点
            // 当前节点等于当前节点的右节点
            while (p2.right !== null && p2.right !== p1) {
                p2 = p2.right;
            } // 右节点为空，则将当前的值添加到结果中
            // 右节点的值为当前节点，继续遍历当前节点的左节点
            if (p2.right === null) {
                console.log("=", p1);

                tree.push(p1.val);
                p2.right = p1;
                p1 = p1.left;
                continue;
            } else {
                p2.right = null;
            }
        } else {
            // 左节点为空，则将当前节点值添加进去
            tree.push(p1.val);
        }
        p1 = p1.right;
    }
    return tree;
};
// @lc code=end
