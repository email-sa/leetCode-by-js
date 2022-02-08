/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
//  * @param {number} targetSum
//  * @return {number}
//  * 暴力解法
//  * 记录和是 目标值的 路径
//  * 思路： 以每一个节点都为根节点开始递归遍历数
//  *      map存储和的值，
//  */
// var pathSum = function (root, targetSum) {
//     let result = [];
//     getRootTree(root, result, targetSum);
//     return result.length;
// };
// // 每一个节点都是根节点
// var getRootTree = function (root, sum, targetSum) {
//     if (!root) return;
//     let target = targetSum;
//     getPaths(root, sum, target);
//     getRootTree(root.left, sum, target);
//     getRootTree(root.right, sum, target);
// };
// var getPaths = function (root, sum, targetSum) {
//     if (!root) return;
//     targetSum -= root.val;
//     if (targetSum === 0) {
//         sum.push({});
//     }
//     getPaths(root.left, sum, targetSum);
//     getPaths(root.right, sum, targetSum);
// };

// --------------2
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {number}
//  */
// var pathSum = function (root, targetSum) {
//     if (!root) return 0;
//     // 如果当前节点值和目标值一致则路径+1

//     // key是前缀和, value是大小为key的前缀和出现的次数
//     let prefixSumCount = new Map(); // 路径和-次数
//     // 前缀和为0的一条路径
//     prefixSumCount.set(0, 1);
//     // 前缀和的递归回溯思路
//     return recursionPathSum(root, prefixSumCount, targetSum, 0);
// };
// /**
//  * 前缀和的递归回溯思路
//  * 从当前节点反推到根节点(反推比较好理解，正向其实也只有一条)，有且仅有一条路径，因为这是一棵树
//  * 如果此前有和为currSum-target,而当前的和又为currSum,两者的差就肯定为target了
//  * 所以前缀和对于当前路径来说是唯一的，当前记录的前缀和，在回溯结束，回到本层时去除，保证其不影响其他分支的结果
//  * @param node 树节点
//  * @param prefixSumCount 前缀和Map
//  * @param target 目标值
//  * @param currSum 当前路径和
//  * @return 满足题意的解
//  */
// var recursionPathSum = function (node, prefixSumCount, target, currSum) {
//     // 1.递归终止条件
//     if (node == null) {
//         return 0;
//     }
//     // 2.本层要做的事情
//     let res = 0;
//     // 当前路径上的和
//     currSum += node.val;
//     // if (node.val === target) {
//     //     res += prefixSumCount.get(node.val - target) ?? 0;
//     // }
//     //---核心代码
//     // 看看root到当前节点这条路上是否存在节点前缀和加target为currSum的路径
//     // 当前节点->root节点反推，有且仅有一条路径，如果此前有和为currSum-target,而当前的和又为currSum,两者的差就肯定为target了
//     // currSum-target相当于找路径的起点，起点的sum+target=currSum，当前点到起点的距离就是target

//     // 如果当前和-目标和在map中存在，就表示有该路径+1
//     res += prefixSumCount.get(currSum - target) ?? 0;

//     // 更新路径上当前节点前缀和的个数
//     prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1);

//     // console.log("-", res, node, currSum, prefixSumCount);

//     //---核心代码

//     // 3.进入下一层
//     res += recursionPathSum(node.left, prefixSumCount, target, currSum);
//     // console.log("--", res, node, currSum, prefixSumCount);
//     res += recursionPathSum(node.right, prefixSumCount, target, currSum);
//     // console.log("---", res, node, currSum, prefixSumCount);

//     // // 4.回到本层，恢复状态，去除当前节点的前缀和数量
//     prefixSumCount.set(
//         currSum,
//         (prefixSumCount.get(currSum) || prefixSumCount.get(0)) - 1
//     );
//     return res;
// };

// -------------3
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * 双递归
 * 记录和是 目标值的 路径
 * 思路： 自顶向下。和目标值求差，
 *      最后返回总次数
 */
var pathSum = function (root, sum) {
    if (!root) return 0;
    return (
        countSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
    );
};

let countSum = (node, sum) => {
    let count = 0;
    let dfs = (node, target) => {
        if (!node) return;

        if (node.val === target) {
            count += 1;
        }

        dfs(node.left, target - node.val);
        dfs(node.right, target - node.val);
    };
    dfs(node, sum);
    return count;
};
// @lc code=end
