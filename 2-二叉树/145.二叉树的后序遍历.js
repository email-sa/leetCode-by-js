/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
//  * @return {number[]}
//  * 递归 左子树-右子树-根节点
//  */
// var postorderTraversal = function (root) {
//     let tree = [];
//     postTraver(root, tree);
//     return tree;
// };
// var postTraver = (node, tree) => {
//     if (!node) return;
//     postTraver(node.left, tree);
//     postTraver(node.right, tree);
//     tree.push(node.val);
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代 左子树-右子树-根节点
 */
var postorderTraversal = function (root) {
    let tree = [];
    let leftStack = [];
    let pren = null;
    while (root || leftStack.length) {
        // 左子树入栈
        while (root) {
            leftStack.push(root);
            root = root.left;
        }
        root = leftStack.pop();
        // 如果当前元素已经遍历过或者右节点为空，就将该节点添加进结果中
        if (root.right === null || root.right === pren) {
            tree.push(root.val);
            // 记录上一个节点，避免添加重复元素
            pren = root;
            root = null;
        } else {
            // 右子树入栈
            leftStack.push(root);
            root = root.right;
        }
    }
    return tree;
};

// @lc code=end
