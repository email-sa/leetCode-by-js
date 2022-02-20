/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
//  * @param {number} targetSum
//  * @return {number[][]}
//  * 队列 先进先出
//  * 栈 先进后出
//  *
//  * 深度优先搜索（类似前序排序） 自顶向下，和目标数求差，直到叶子结点
//  */
// var pathSum = function (root, targetSum) {
//     let pathStack = [];
//     let result = []; //  队列
//     getTargetPath(root, result, pathStack, targetSum);
//     return result;
// };
// var getTargetPath = function (root, result, pathStack, targetSum) {
//     if (!root) return;
//     // 添加当前节点到路径队列中
//     pathStack.push(root.val);
//     // 当前值和目标值求差
//     targetSum -= root.val;
//     // 叶子结点并且差值为0是，就是目标路径
//     if (root.left === null && root.right === null && targetSum === 0) {
//         result.push([...pathStack]);
//     }
//     // 左右子树路径
//     getTargetPath(root.left, result, pathStack, targetSum);
//     getTargetPath(root.right, result, pathStack, targetSum);
//     // ！ 删除最队列（栈）的最后一个节点
//     pathStack.pop();
// };

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 * 队列 先进先出
 * 栈 先进后出
 *
 * 广度优先搜索（类似前序排序） 自下而上，从叶子结点求和直至根节点
 */
var pathSum = function (root, targetSum) {
    let sumStack = [0]; // 存节点路径和的队列
    if (!root) return result;
    let nodeStack = [root]; // 存节点的队列
    let result = []; //  队列
    let nodeMap = new Map(); // 存节点父节点的map list
    while (nodeStack.length) {
        // 取队列的第一个节点和节点和
        let node = nodeStack.shift();
        let sum = sumStack.shift() + node.val;

        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                getPath(node, nodeMap, result);
            }
        } else {
            // 左节点存在，添加左节点到map，路径和队列中添加当前的路径和
            if (node.left) {
                nodeMap.set(node.left, node);
                sumStack.push(sum);
                nodeStack.push(node.left);
            }
            if (node.right) {
                nodeMap.set(node.right, node);
                sumStack.push(sum);
                nodeStack.push(node.right);
            }
        }
    }
    return result;
};
var getPath = function (node, nodeMap, result) {
    let path = [];
    while (node) {
        // 一直往结果中的第一个元素添加值
        path.unshift(node.val);
        node = nodeMap.get(node); // 取出存储的节点
    }
    result.push(path);
};
// @lc code=end
