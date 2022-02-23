/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 * 二叉搜索树 ，从下到上的，中序排列是有序数组，左小右大
 * 删除节点值为 key的节点，保持原搜索二叉树的特性；自顶向下深度优先搜索
 * 时间复杂度：O(logN)在算法的执行过程中，我们一直在树上向左或向右移动。
 * H 是树的高度，若树是一个平衡树则 H = logN。
​
  值得是从根节点到要删除节点的高度
空间复杂度：O(H)，递归时堆栈使用的空间，HH 是树的高度。

套路模板
const BST = (root,target)=>{
    if (root.val == target)
        // 找到目标，做点什么
    if (root.val < target) 
        BST(root.right, target);
    if (root.val > target)
        BST(root.left, target); 
}


 */
var deleteNode = function (root, key) {
    if (root === null) return null;
    // 比当前值大，在右子树
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // 比当前值小，在左子树
    else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        // 1. 删除叶子结点，直接删除
        if (root.left === null && root.right === null) {
            root = null;
        }
        // 2. 删除节点有右节点，取右子树的最小节点
        else if (root.right !== null) {
            root.val = nextMini(root.right);
            root.right = deleteNode(root.right, root.val);
        }
        // 3. 删除节点有左节点，取左子树的最小节点
        else if (root.left !== null) {
            root.val = preMax(root.left);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};
// 获取前驱节点// 左子树的最大节点
let preMax = function (node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node.val;
};
// 获取后继节点
let nextMini = function (node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node.val;
};
// @lc code=end
