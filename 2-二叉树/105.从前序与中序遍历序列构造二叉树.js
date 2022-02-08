/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 前序遍历 第一个节点是根节点
 * 中序遍历 中间是根节点
 */
var buildTree = function (preorder, inorder) {
    return buileTreeList(
        preorder,
        0,
        preorder.length - 1,
        inorder,
        0,
        inorder.length - 1
    );
};
let buileTreeList = function (
    preorder,
    pStartIndex,
    pEndIndex,
    inorder,
    iStart,
    iEnd
) {
    if (pStartIndex > pEndIndex) {
        return null;
    }
    // ********* 当前节点需要做的事 **********
    let rootVal = preorder[pStartIndex];

    let leftIndex = 0;
    for (let i = iStart; i <= iEnd; i++) {
        if (inorder[i] === rootVal) {
            leftIndex = i;
            break;
        }
    }
    let leftSize = leftIndex - iStart;
    let root = new TreeNode(rootVal);
    // *******************

    root.left = buildTree(
        preorder,
        pStartIndex + 1,
        leftSize + pStartIndex,
        inorder,
        iStart,
        leftIndex - 1
    );
    root.right = buildTree(
        preorder,
        leftSize + pStartIndex + 1,
        pEndIndex,
        inorder,
        leftIndex + 1,
        iEnd
    );
    return root;
};
// @lc code=end
