/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * 将二维数组中的每一行的和，先求出来
 * 和303类似，求每一行的数值和，在最后累加
 * 最后再去求选中区域的和
 *
 * 时间复杂度： O（mn）行数和列数
 * 每次检索的时间复杂度是 O(m)
 * 空间复杂度：  O（mn）行数和列数，存数据和的m*（n+1）
 */
var NumMatrix = function (matrix) {
    let m = matrix.length;
    if (m <= 0) {
        return;
    }
    let n = matrix[0].length;
    // 使用map，防止引用数据共享内存，构建一个 m，n+1的二维数组，
    // 设为 n+1 的目的是为了方便计算每一行的子数组和，不需要对 col 1=0 的情况特殊处理
    this.sumArr = new Array(m).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            this.sumArr[i][j + 1] = matrix[i][j] + this.sumArr[i][j];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0;
    while (row1 <= row2) {
        sum += this.sumArr[row1][col2 + 1] - this.sumArr[row1][col1];
        row1++;
    }
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
