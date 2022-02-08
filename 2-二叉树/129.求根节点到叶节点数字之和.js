/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

const { get } = require("http");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// --------------1
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  * 求路径的数字和
//  * 最好时间复杂度 O(n)
//  * 空间复杂度 O(n)
//  *
//  * 思路：自顶向下，深度优先搜索，去除所有的路径数字再求和，最后将路径队列的值求和
//  * 时间复杂度：O(n)O(n)，其中 nn 是二叉树的节点个数。对每个节点访问一次。
//  *
//  * 空间复杂度：O(n)O(n)，其中 nn 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，
//  * 递归栈的深度等于二叉树的高度，最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)O(n)。
//  */
// var sumNumbers = function (root) {
//     let pathNum = [];
//     getPathNum(root, 0, pathNum);
//     return pathNum.reduce((pre, cur) => pre + cur, 0);
// };

// let getPathNum = function (root, num, pathNum) {
//     if (!root) return;
//      // 父节点值*10+当前值
//     num = num * 10 + root.val;
//     if (root.left === null && root.right === null) {
//         pathNum.push(num);
//     }
//     getPathNum(root.left, num, pathNum);
//     getPathNum(root.right, num, pathNum);
// };

// // 简化版-----1
// var sumNumbers = function (root) {
//     return getPathNum(root, 0);
// };

// let getPathNum = function (root, preSum) {
//     if (!root) return 0;
//     // 父节点值*10+当前值
//     let num = preSum * 10 + root.val;
//     if (root.left === null && root.right === null) {
//         return num;
//     }
//     return getPathNum(root.left, num) + getPathNum(root.right, num);
// };

// ------------2
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  * 求路径的数字和
//  * 最好时间复杂度 O(n)
//  * 空间复杂度 O(n)
//  *
//  * 思路：自地向上，广度优先搜索，所有的路径数字再求和，最后将路径队列的值求和
//  */
// var sumNumbers = function (root) {
//     let pathNum = [];
//     getPathNum(root, pathNum);
//     return pathNum.reduce((pre, cur) => pre + cur, 0);
// };
// let getPathNum = function (root, pathNum) {
//     if (!root) return;
//     let nodeStack = [root];
//     let rootMap = new Map();
//     while (nodeStack.length) {
//         let node = nodeStack.shift();
//         if (node.left === null && node.right === null) {
//             pathNum.push(getNum(node, rootMap));
//         } else {
//             if (node.left) {
//                 nodeStack.push(node.left);
//                 // key 当前节点额左子树 val 父节点
//                 rootMap.set(node.left, node);
//             }
//             if (node.right) {
//                 nodeStack.push(node.right);
//                 rootMap.set(node.right, node);
//             }
//         }
//     }
// };
// let getNum = function (node, rootMap) {
//     let num = 0,
//         i = 0;
//     while (node) {
//         num += node.val * 10 ** i;
//         i++;
//         node = rootMap.get(node);
//     }
//     return num;
// };

// ---------简化版 2
/**
 * @param {TreeNode} root
 * @return {number}
 * 求路径的数字和
 * 最好时间复杂度 O(n)
 * 空间复杂度 O(n)
 *
 * 思路：自地向上，广度优先搜索，
 */
var sumNumbers = function (root) {
    if (!root) return;
    let nodeQueue = []; // 节点队列
    let valQueue = []; // 值队列
    let sum = 0;
    nodeQueue.push(root);
    valQueue.push(root.val);
    while (nodeQueue.length) {
        let node = nodeQueue.shift();
        let val = valQueue.shift();
        // 叶子结点的时候求和
        if (node.left === null && node.right === null) {
            sum += val;
        } else {
            if (node.left) {
                nodeQueue.push(node.left);
                // 值队列中添加当前值*10 +下一个节点的值
                valQueue.push(val * 10 + node.left.val);
            }
            if (node.right) {
                nodeQueue.push(node.right);
                valQueue.push(val * 10 + node.right.val);
            }
        }
    }
    return sum;
};
// @lc code=end
