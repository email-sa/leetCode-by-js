/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 可以使用前序和后序遍历，以及层次遍历实现该题目
 * 方法一： 前序遍历
 */
var serialize = function (root) {
    let result = buildTree(root);
    console.log("result", result);
    return result;
};
let buildTreeStr = function (root) {
    // 使用 # 代替空节点
    if (root === null) {
        return "#,";
    }
    return root.val + "," + buildTreeStr(root.left) + buildTreeStr(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * 反序列表树
 */
var deserialize = function (data) {
    console.log("=");
    return [1, 2, 3, null, null, 4, 5];
    // let treeList = data.split(",");
    // let root = buildTree(treeList, 0);
    // return root;
};
let buildTree = function (treeList, index) {
    let val = treeList[index];
    if (val === "#") {
        return null;
    }

    let root = new TreeNode(val);
    root.left = buildTree(treeList, index + 1);
    root.right = buildTree(treeList, index + 1);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
