/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 * 前序遍历
 * 利用队列先进先出，从左往右
 * 循环体： 左右节点入栈
 *          左右节点出栈-添加节点值到结果中
 */
var levelOrder = function (root) {
    let nodeQueue = []; // 节点队列
    let result = [];
    if (root === null) return result;
    nodeQueue.push(root); // 第一层
    // 按层次遍历
    while (nodeQueue.length) {
        let len = nodeQueue.length;

        result.push([]);
        for (let i = 0; i < len; i++) {
            let node = nodeQueue.shift();

            result[result.length - 1].push(node.val); // 添加当前节点值

            // 从左往右添加节点
            if (node.left) nodeQueue.push(node.left);
            if (node.right) nodeQueue.push(node.right);
        }
    }
    return result;
};
// @lc code=end
