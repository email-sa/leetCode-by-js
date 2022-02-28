## BFS 遍历

https://labuladong.gitee.io/algo/4/29/115/

大部分题目都是然你找从 start 到 target 的最小距离类似的题

1. 需要一个队列,记录从起点到当前的遍历节点的队列;常用 while + 队列实现
2. visited 用于记录以访问过的点
3. 开始时,先将第一个节点添加到队列,记录已访问点
4. while 执行条件就是队列不为空的时候
5. 记录队列 size ,遍历队列的所有元素

整体遍历框架

```javascript
// 计算从起点 start 到终点 target 的最近距离
const BFS = (Node start, Node target)=> {
    let  q = []; // 核心数据结构
    let  visited = new Set(); // 避免走回头路

    q.push(start); // 将起点加入队列
    visited.set(start);
    let step = 0; // 记录扩散的步数

    while (q.length) {
        let sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            /* 划重点：这里判断是否到达终点 */
            if (cur === target)
                return step; // 找到就返回
            /* 将 cur 的相邻节点加入队列  以二叉树为例子*/
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
}

```
