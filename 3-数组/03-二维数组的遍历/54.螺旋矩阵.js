/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 思路：
 * 结果的方向是从左往右，从上往下，从右往左，从下往上，一个圈的四个点就是节点
 * 通过不断地缩小临界边，来遍历数组直至数组被遍历完
 * 上边界 topLeft top
 * 右边界 topRight right
 * 下边界 bottomright bottom
 * 左边界 bottomleft left
 *
 * 1. 从左到右遍历上侧元素，依次为 (top,left) 到 (top,right)。
 * 2. 从上到下遍历右侧元素，依次为 (top + 1, right) 到 (bottom, right)
 * 3. 如果 left<right 且 top < bottom，则从右到左遍历下侧元素，依次为(bottom,right−1) 到 (bottom,left+1)，
 * 以及从下到上遍历左侧元素，依次为 (bottom,left) 到 (top+1,left)。
 * 遍历完当前层的元素之后，将 left 和 top 分别增加 1，将 right和 bottom 分别减少 1，进入下一层继续遍历，直到遍历完所有元素为止


 * 时间复杂度 O(mn) 其中 mm 和 nn 分别是输入矩阵的行数和列数
 * 空间复杂度 O(1) 除了输出数组以外，空间复杂度是常数
 */
// var spiralOrder = function (matrix) {
//     if (!matrix.length || !matrix[0].length) {
//         return [];
//     }
//     // i*j的数组
//     let n = matrix.length, // 行
//         m = matrix[0].length; // 列
//     let result = [];
//     // 代表正方形的上右下左的四条边
//     let top = 0, // 顶边
//         right = m - 1, // 右边
//         bottom = n - 1, // 底边
//         left = 0; // 左边

//     // 遍历完数组之后就结束
//     // j 横向 i 纵向
//      while (left <= right && top <= bottom) {
//         // 在顶部，从左往右
//         for (let j = left; j <= right; j++) {
//             result.push(matrix[top][j]);
//         }
//         // 在右边，从上往下
//         for (let i = top + 1; i <= bottom; i++) {
//             // 从顶遍不断向下移，取bottom的点
//             result.push(matrix[i][right]);
//         }
//         // **如果 left<right 且 top < bottom，则从右到左遍历下侧元素，依次为(bottom,right−1) 到 (bottom,left+1)
//         if (left < right && top < bottom) {
//             // 在下边，从右往左
//             for (let j = right - 1; j > left; j--) {
//                 // 从右边界向左，j--，知道大于左边界
//                 result.push(matrix[bottom][j]);
//             }
//             //  在下面，从下往上
//             for (let i = bottom; i > top; i--) {
//                 // 底边到定边，的最左边的值
//                 result.push(matrix[i][left]);
//             }
//         }
//         // 顶边向下移 // 右边向左移 // 底边向上移 // 左边向右移
//         [top, right, bottom, left] = [top + 1, right - 1, bottom - 1, left + 1];
//     }
//     return result;
// };
// 方便理解
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    // i*j的数组
    let n = matrix.length, // 行
        m = matrix[0].length; // 列
    let result = [];
    // 代表正方形的上右下左的四条边
    let top = 0, // 顶边
        right = m - 1, // 右边
        bottom = n - 1, // 底边
        left = 0; // 左边

    // 遍历完数组之后就结束
    // j 横向 i 纵向
    while (result.length < m * n) {
        if (top <= bottom) {
            // 在顶部，从左往右
            for (let j = left; j <= right; j++) {
                result.push(matrix[top][j]);
            }
            // 顶边向下移
            top++;
        }
        if (left <= right) {
            // 在右边，从上往下
            for (let i = top; i <= bottom; i++) {
                // 从顶遍不断向下移，取bottom的点
                result.push(matrix[i][right]);
            }
            // 右边向左移
            right--;
        }
        if (top <= bottom) {
            // 在下边，从右往左
            for (let j = right; j >= left; j--) {
                // 从右边界向左，j--，知道大于左边界
                result.push(matrix[bottom][j]);
            }
            // 底边向上移
            bottom--;
        }
        // **如果 left<right 且 top < bottom，则从右到左遍历下侧元素，依次为(bottom,right−1) 到 (bottom,left+1)
        if (left <= right) {
            //  在下面，从下往上
            for (let i = bottom; i >= top; i--) {
                // 底边到定边，的最左边的值
                result.push(matrix[i][left]);
            }
            // 左边向右移
            left++;
        }
    }
    return result;
};
// @lc code=end
