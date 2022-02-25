/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 * 如果你把每个人看做图中的节点，相互讨厌的关系看做图中的边，那么 dislikes 数组就可以构成一幅图；
又因为题目说互相讨厌的人不能放在同一组里，相当于图中的所有相邻节点都要放进两个不同的组；
dislikes 为互不喜欢的人的组，可以是双向图
 */
// 建图函数
const buildGraph = (n, list) => {
    // 图的编号是 1-n
    let graph = new Array(n + 1).fill(null);
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (let edge of list) {
        let v = edge[0];
        let w = edge[1];
        // v -> w
        graph[v].push(w);
        // w -> v
        graph[w].push(v);
    }
    return graph;
};
var possibleBipartition = function (n, dislikes) {
    let colors = new Array(n + 1).fill(false);
    let visited = new Array(n + 1).fill(false); // 避免有环
    let isOk = true;
    let graph = buildGraph(n, dislikes);
    const travelList = (graph, x) => {
        if (!isOk) {
            return; // 不是二分图的话
        }
        visited[x] = true;
        for (let point of graph[x]) {
            // 没有访问过的话
            if (!visited[x]) {
                colors[point] = !colors[x];
                travelList(graph, point);
            } else {
                if (colors[point] === colors[x]) {
                    isOk = false;
                }
            }
        }
    };
    // 因为图不一定是联通的，可能存在多个子图
    // 所以要把每个节点都作为起点进行一次遍历
    // 如果发现任何一个子图不是二分图，整幅图都不算二分图

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            travelList(graph, i);
        }
    }

    return isOk; // 是否是二分图
};

// @lc code=end
