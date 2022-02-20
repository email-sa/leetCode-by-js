/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

const { getHeapSnapshot } = require("v8");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 递归找出这两个点的路径
 * 在对和两个点的路径进行比较，直到目标节点
 *
 * 递归
 * 终止条件： 达到目标节点为止
 * 循环体： 记录当前节点的路径，递归左子树和右子树
 */
// ---------------1
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  * 递归找出这两个点的路径
//  * 在对和两个点的路径进行比较，直到目标节点
//  * 两次遍历
//  *
//  * 递归
//  * 终止条件： 达到目标节点为止
//  * 循环体： 记录当前节点的路径，递归左子树和右子树
//  */

// var lowestCommonAncestor = function (root, p, q) {
//     let paths = [],
//         paths2 = [];
//     if (!p) return q;
//     if (!q) return p;
//     getHeapSnapshot(root, p, "", paths);
//     getHeapSnapshot(root, q, "", paths2);
//     let pre = null;
//     for (let i = 0; i < Math.max(paths.length, paths2.length) - 1; i++) {
//         if (paths[i] !== paths2[i]) {
//             return new TreeNode(pre);
//         } else {
//             pre = paths[i];
//         }
//     }
//     return new TreeNode(pre);
// };
// // 递归
// var getHeapSnapshot = function (root, p, path, paths) {
//     if (!root) return null;
//     path += root.val;
//     if (root.val === p.val) {
//         paths.push(...path.split(","));
//         return null;
//     } else {
//         path += ",";
//         getHeapSnapshot(root.left, p, path, paths);
//         getHeapSnapshot(root.right, p, path, paths);
//     }
// };
//
// ---------------1 的进阶版
//
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  * 递归找出这两个点的路径
//  * 在对和两个点的路径进行比较，直到目标节点
//  * 两次遍历
//  *
//  * 递归
//  * 终止条件： 达到目标节点为止
//  * 循环体： 记录当前节点的路径，递归左子树和右子树
//  */
// var lowestCommonAncestor = function (root, p, q) {
//     let paths = getHeapSnapshot(root, p);
//     let paths2 = getHeapSnapshot(root, q);
//     let pre = null;
//     for (let i = 0; i < paths.length && i < paths2.length; i++) {
//         if (paths[i] === paths2[i]) {
//             pre = paths[i];
//         } else {
//             break;
//         }
//     }
//     return pre;
// };
//
// // 遍历
// var getHeapSnapshot = function (root, target) {
//     let path = [];
//     let node = root;
//     // 二叉搜索树
//     // 当前值比目标值小 目标值在右子树上
//     // 当前值比目标值大 目标值在左子树上
//     while (node != target) {
//         path.push(node);
//         if (target.val < node.val) {
//             node = node.left;
//         } else {
//             node = node.right;
//         }
//     }
//     path.push(node);

//     return path;
// };

// ----------------3 一次遍历
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 一次遍历同时查询p，q节点
 * 如果当前节点>p,q 节点，那q，p节点在左子树上
 * 如果当前节点<p,q 节点，那q，p节点在右子树上
 * 否则，当前节点就是p，q的分叉点
 */
var lowestCommonAncestor = function (root, p, q) {
    let node = root;
    let pre = null;
    while (true) {
        if (node.val > p.val && node.val > q.val) {
            node = node.left;
        } else if (node.val < p.val && node.val < q.val) {
            node = node.right;
        } else {
            break;
        }
    }
    return node;
};

// @lc code=end
