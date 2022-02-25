/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 * 思路：
 * 题目采用的是 【邻接表】表示形式
 * 采用二分色发
 *  二分图就是 相邻的点不能是同种颜色，如果颜色相同就返回false
 * [无向图，可能存在环]
 * 深度优先法
 */

// 输入邻接表判断是否是二分图
var isBipartite = function (graph) {
    let len = graph.length;
    let colors = new Array(len).fill(false); // 记录颜色的数组，true，false代表两个颜色
    var visited = new Array(len).fill(false); // 记录被访问过的点，避免出现环
    var isOk = true; // 记录是否为二分图

    // DFS 深度遍历  一遍遍历，一边标记颜色
    const travelList = (graph, x) => {
        // 如果不是二分图就直接返回
        if (!isOk) {
            return;
        }
        visited[x] = true; // 标记为已访问
        // 遍历 节点 x 的所有相邻点
        for (let point of graph[x]) {
            // 只访问没访问过的节点，给节点图上和 x 不一样的颜色
            if (!visited[point]) {
                colors[point] = !colors[x];
                travelList(graph, point);
            } else {
                // 相邻节点已经被访问过
                // 比较两个节点的颜色，颜色一致就不是二分图
                if (colors[x] === colors[point]) {
                    isOk = false;
                }
            }
        }
    };
    // ------
    // 因为图不一定是联通的，可能存在多个子图
    // 所以要把每个节点都作为起点进行一次遍历
    // 如果发现任何一个子图不是二分图，整幅图都不算二分图
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            travelList(graph, i);
        }
    }
    return isOk;
};

/**
 * BFS 广度遍历 需要使用一个队列记录节点
 */
var isBipartite = function (graph) {
    let len = graph.length;
    let colors = new Array(len).fill(false); // 记录颜色的数组，true，false代表两个颜色
    let visited = new Array(len).fill(false); // 记录被访问过的点，避免出现环
    let isOk = true; // 记录是否为二分图

    // bFS 宽度遍历，广度遍历  一遍遍历，一边标记颜色
    const bfs = (graph, x) => {
        let que = [];
        visited[x] = true; // 标记为已访问
        que.push(x);
        //
        while (que.length && isOk) {
            let v = que.pop();
            // 遍历 节点 x 的所有相邻点
            for (let point of graph[v]) {
                // 只访问没访问过的节点，给节点图上和 x 不一样的颜色
                if (!visited[point]) {
                    colors[point] = !colors[v];
                    visited[point] = true; // 标记为已访问
                    que.push(point);
                } else {
                    // 相邻节点已经被访问过
                    // 比较两个节点的颜色，颜色一致就不是二分图
                    if (colors[v] === colors[point]) {
                        isOk = false;
                    }
                }
            }
        }
    };
    // ------
    // 因为图不一定是联通的，可能存在多个子图
    // 所以要把每个节点都作为起点进行一次遍历
    // 如果发现任何一个子图不是二分图，整幅图都不算二分图
    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            bfs(graph, i);
        }
    }
    return isOk;
};
// @lc code=end
