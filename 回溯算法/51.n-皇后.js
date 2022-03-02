/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 * DFS 算法
 * 递归 + 双层数组 解法
 * 1. 定义路径 board（棋盘） 列表，和 board 共同参与递归
 * 2. 递归函数
 * 2.1 递归的结束条件，当row,行数和 n 相等的时候，表示这一行已经遍历完，将改行的数据加到result中
 * 2.2 遍历每一行，找出可以放置皇后的点，排除错误答案
 * 2.3 做选择，将当前选择加入链表
 * 再递归下一行和放置皇后，撤销选择
 */
var solveNQueens = function (n) {
    // 'Q' 和 '.' 分别代表了皇后和空位
    let board = new Array(n).fill(0).map(() => new Array(n).fill(".")); // 初始化空棋盘
    let result = [];
    // 路径： board 中小于 row 的那些行都已经成功放置了皇后
    // 选择列表：第 row 行的所有列都是放置皇后的选择
    // 结束条件：rows 超过 board 的最后一行
    const backboard = (board, row) => {
        // 结束条件
        if (row === board.length) {
            result.push(board.map((row) => row.join(""))); // 棋盘便利完之后，加入结果到记录中
            return;
        }
        // 做选择 遍历列

        for (let i = 0; i < n; i++) {
            // 做选择 放皇后还是点点，判断是不是可以放皇后
            if (!isValid(board, row, i)) {
                continue;
            }
            board[row][i] = "Q"; // 每个节点都可以放置皇后，只是看，放了皇后之后是不是以正确的放置法
            // 遍历下一层决策树
            backboard(board, row + 1);
            // 撤销选择
            board[row][i] = "."; // 移除当前点的皇后
        }
    };

    backboard(board, 0);
    return result;
};
// 判断 board[row][col] 是否可以放置皇后 row 行 col 列，从上往下，只需要判断左上和右上
const isValid = (board, row, col) => {
    let len = board.length;
    // 检查列中是否有和皇后相互冲突的
    for (let i = 0; i < len; i++) {
        if (board[i][col] === "Q") {
            return false;
        }
    }
    // 检查右上方是否有皇后冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
        if (board[i][j] === "Q") {
            return false;
        }
    }
    // 检查左上方是否有皇后冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") {
            return false;
        }
    }
    return true;
};
// @lc code=end
