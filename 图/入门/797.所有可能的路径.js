/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 * 图算法常规套路
 * 定义数据 1. 记录所有路径   2. 记录被遍历过的节点（有环的话）
 */

// var allPathsSourceTarget = function (graph) {
//     // 维护递归过程中经过的路径
//     const stack = [],
//         result = [];
//     // 记录被遍历过的节点 --- 因为无环，所以可以不用记录已遍历过的点
//     // 参数 图，开始节点，结束点
//     const dfs = (graph, x, n) => {
//         if (x === n) {
//             result.push(stack.slice()); // 找到目标点，添加路径到结果中
//             return;
//         }

//         for (const y of graph[x]) {
//             stack.push(y); // 添加当前点到路径中
//             dfs(graph, y, n); // 继续寻找当前点到 n的路径
//             stack.pop(); // 删除最后的节点，继续寻找
//         }
//     };

//     stack.push(0); // 从 0到 n-1节点，起点为 0
//     dfs(graph, 0, graph.length - 1);
//     return result;
// };
// 解法2

const result = []; // 记录所有路径
var allPathsSourceTarget = function (graph) {
    // 维护递归过程中经过的路径
    let onPath = [];
    // // 记录被遍历过的节点 --- 因为无环，所以可以不用记录已遍历过的点
    // // let visited = [];
    // 记录从起点到当前节点的路径
    traverse(graph, 0, onPath); // 从0开始的路径
    return result;
};
/* 图遍历框架 */
const traverse = (graph, s, onPath) => {
    // 添加节点 s 到路径
    onPath.push(s);
    let len = graph.length;
    if (s == len - 1) {
        // 到达终点
        result.push([...onPath]);
        onPath.pop(); // 溢出终点，继续后面的寻找
        return;
    }
    // 递归每个相邻的节点
    for (let neighbor of graph[s]) {
        traverse(graph, neighbor, onPath); //切换开始位置为graph[s]的元素
    }
    // 从路径中移除节点 s
    onPath.pop();
};
// @lc code=end
