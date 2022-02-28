/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
//  * @return {number}
//  * 深度遍历  类似前序遍历
//  */
// var minDepth = function (root) {
//     // 如果是节点为空,返回0
//     if (root === null) {
//         return 0;
//     }
//     // 没有子节点的节点为叶子节点
//     if (root.left === null && root.right === null) {
//         return 1;
//     }
//     // 定义为最大深度值
//     let min = 10 ** 5; // 题目限制的节点范围
//     // 比较左右子树的深度,哪一个更小
//     if (root.left !== null) {
//         min = Math.min(minDepth(root.left), min);
//     }
//     if (root.right !== null) {
//         min = Math.min(minDepth(root.right), min);
//     }
//     return min + 1; // 加上当前节点
// };

/**
 * @param {TreeNode} root
 * @return {number}
 * BFS 解法
 * 题目就是 从 root 到最近的叶子节点
 * target 就是叶子节点
 * 就是层次遍历,一层一层往下
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let q = []; // 核心数据结构
    // let  visited = new Set(); // 避免走回头路 二叉树没有从子节点到父节点的指针
    q.push(root); // 将起点加入队列
    // visited.set(start);
    let step = 1; // 记录扩散的步数; root在第一层

    while (q.length) {
        // 一层一层的遍历
        let sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            // 每一层从左往右遍历每一层节点
            let cur = q.shift();
            /* 划重点：这里判断是否到达终点 */
            if (cur.left === null && cur.right === null) {
                return step;
            }
            /* 将 cur 的相邻节点加入队列  */
            if (cur.left != null) {
                q.push(cur.left);
            }
            if (cur.right != null) {
                q.push(cur.right);
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
    return step;
};
// @lc code=end
