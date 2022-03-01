/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * BFS 解法 每个数字的最小旋转次数,从当前数到目标数的次数
 */
// 数字向上拨动一下
const upNumber = (s, j) => {
    let str = s.split("");
    if (str[j] === "9") {
        str[j] = "0";
    } else {
        str[j] = +str[j] + 1 + "";
    }
    return str.join("");
};

// 数字向下拨动一下
const downNumber = (s, j) => {
    let str = s.split("");
    if (str[j] === "0") {
        str[j] = "9";
    } else {
        str[j] = +str[j] - 1 + "";
    }
    return str.join("");
};

//
var openLock = function (deadends, target) {
    if (target === "0000") {
        // 临界情况
        return 0;
    }
    let q = []; // 核心数据结构
    let visited = new Set(); // 避免走回头路

    if (deadends.includes("0000")) {
        // 临界情况
        return -1;
    }
    q.push("0000"); // 将起点加入队列
    visited.add("0000");
    let step = 0; // 记录扩散的步数

    while (q.length) {
        let sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            /* 划重点：这里判断是否到达终点 */
            // 找到就返回
            if (deadends.includes(cur)) {
                continue;
            }
            if (cur === target) {
                return step;
            }
            /* 将 cur 的相邻节点加入队列   这个数的前后两个为相邻*/
            for (let j = 0; j < 4; j++) {
                let up = upNumber(cur, j);
                if (!visited.has(up)) {
                    visited.add(up);
                    q.push(up);
                }
                let down = downNumber(cur, j);
                if (!visited.has(down)) {
                    visited.add(down);
                    q.push(down);
                }
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }

    return -1; // m没找到
};
// @lc code=end
