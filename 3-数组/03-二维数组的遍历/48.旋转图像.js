/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 思路：
 * 将矩阵先沿着a[0][0]-a[len-1][len-1]的对角线对折翻转
 * 然后再将 反转后的多维数字 横向reverse，最后的结果就是顺时针90度的结果
 *
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 */
var rotate = function (matrix) {
    let len = matrix.length;
    let temp = 0;
    // 对角线翻转
    for (let i = 0; i < len; i++) {
        // 行
        for (let j = 0; j < i; j++) {
            // 对角线翻转，索引<i
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // reverse 翻转数组
    for (let i = 0; i < len; i++) {
        // 或者 reverse(matrix)
        for (let j = 0; j < len >> 1; j++) {
            // 左右翻转，索引到数组长度的一般
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][len - 1 - j];
            matrix[i][len - 1 - j] = temp;
        }
    }
    return matrix;
};
// 反转一维数组
const reverse = (arr) => {
    let i = 0,
        j = arr.length - 1;
    // 从左往右，从右往左，j
    while (j > i) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
};
// @lc code=end
