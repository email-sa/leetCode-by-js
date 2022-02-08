/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * 利用栈，后进先出
 * 队列 先进先出
 */
var levelOrderBottom = function (root) {
    let resultStack = []; // 结果栈
    if (root === null) return resultStack;
    let nodeQueue = []; // 节点队列
    nodeQueue.push(root);
    while (nodeQueue.length) {
        let len = nodeQueue.length;
        resultStack.unshift([]); // 进栈
        for (let i = 0; i < len; i++) {
            let node = nodeQueue.shift(); // 出队列
            resultStack[0].push(node.val);
            if (node.left) nodeQueue.push(node.left); // 进队列
            if (node.right) nodeQueue.push(node.right);
        }
    }
    return resultStack;
};
// @lc code=end
