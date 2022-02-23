/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * 递归
 *  完全二叉树
 * 每个节点需要做的事情
 * 将左子节点指向右子节点
 * 每两个相邻的节点连起来[将每一层的树节点连接起来]
 */
var connect = function (root) {
    if (root === null) {
        return null;
    }
    // 连接根节点的左右子节点
    connectTwoNode(root.left, root.right);
    return root;
};
let connectTwoNode = (node1, node2) => {
    // 递归到节点为空时，结束
    if (node1 === null || node2 === null) {
        return;
    }
    /**** 前序遍历位置 ****/
    // 将传入的连个节点相连
    node1.next = node2; // ！！！
    // 连接 子树的左右节点
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    //  连接同层的相邻节点,跨父节点的相邻节点
    connectTwoNode(node1.right, node2.left);
};
// @lc code=end
