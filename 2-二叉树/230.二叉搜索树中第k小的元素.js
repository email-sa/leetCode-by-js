/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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

// // -----1 递归
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  * 找出树种第K小的元素
//  * 思路： 中序排列之后，取第k个元素
//  * 时间复杂度 O(n)
//  * 空间复杂度 O(n)
//  */
// var kthSmallest = function (root, k) {
//     let result = [];
//     sortTree(root, result);
//     return result[k];
// };
// let sortTree = function (root, result) {
//     if (!root) return;
//     sortTree(root.left, result);
//     result.push(root.val);
//     sortTree(root.right, result);
// };

// --------2 迭代
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 找出树种第K小的元素 前序遍历
 * 思路： 利用栈-先进后出来实现（最终类型与中序排序，所以县遍历左子树的最节点，再依次出栈，遍历右节点
 *  找的目标值就返回
 * 时间复杂度 O(h+k) h 层数，k 序号
 * 空间复杂度 O(h+k)
 * 
 * 时间复杂度：O(H+k)，其中 HH 指的是树的高度，由于我们开始遍历之前，要先向下达到叶，
 *  当树是一个平衡树时：复杂度为 O(logN+k)。
 *  当树是一个不平衡树时：复杂度为 O(N+k)，此时所有的节点都在左子树。
 * 空间复杂度：O(H+k)。当树是一个平衡树时：O(logN+k)。当树是一个非平衡树时：O(N+k)。

 */
var kthSmallest = function (root, k) {
    let nodeStack = [];
    while (true) {
        while (root) {
            nodeStack.push(root);
            root = root.left;
        }
        root = nodeStack.pop();
        if (--k === 0) return root.val;
        root = root.right;
    }
};
// @lc code=end
