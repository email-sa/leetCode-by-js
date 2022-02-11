/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * 思路
 * 利用差分法求解
 * 差分法： arr[i]=arr[i]-arr[i-1]   对差分数组求前缀和即可得到原数组
 *
 * 题目要求，将数组中的某个区间的值都加上 一个值
 * 相对差分法来说就是 arr[i...j]的元素都加一个值，对于差分的结果而言
 * 就是arr[i]= (arr[i]+val) -arr[i-1] = 原来差分的arr[i]+val
 *  arr[j]=原来的arr[j] 而  arr[j+1]=arr[j+1]-(arr[j]+val) =原来差分的arr[j+1]-val
 *
 * 实例  8  2  6  3  1
 * 差分  8 -6  4 -3 -2
 * +3后  8 -3* 4 -3 -5*  都加了同样的值，求差的时候只会有头尾需要变化
 *
 * 所以就是对差分数组的i,和j+1的变换
 * 再求前缀和即可
 */

// 定义一个差分公共类 包含increase 和 result 前缀和方法
class Diff {
    constructor(n) {
        this.diffArr = [];
        this.diff(new Array(n + 1).fill(0), n); // 初始化diff数组全为0，且长度为 n+1
    }
    // 求数组的差分
    diff(arr, n) {
        this.diffArr[0] = 0;
        // 索引从1开始
        for (let i = 1; i < n; i++) {
            this.diffArr[i] = arr[i] - arr[i - 1];
        }
    }
    // 差分 // 求区间差分的值
    diffSum(i, j, val) {
        this.diffArr[i] += val; // 第 i 个元素 + val
        if (j + 1 < this.diffArr.length) {
            this.diffArr[j + 1] -= val; // 第 j+1 个元素 - val
        }
    }
    // 前缀和
    prefixSum() {
        let len = this.diffArr.length;
        let sums = new Array(len).fill(0); // 结果前缀和，长度 为 n
        sums[0] = this.diffArr[0]; // 前缀和的第一个元素 是diff 数组的第一个元素
        // 索引从1开始
        for (let i = 1; i < len; i++) {
            sums[i] = sums[i - 1] + this.diffArr[i]; // 前缀和，从i-1开始
        }
        return sums;
    }
}
var corpFlightBookings = function (bookings, n) {
    let diff = new Diff(n); // 初始化类diff
    for (let i = 0; i < bookings.length; i++) {
        const index = bookings[i][0] - 1;
        const j = bookings[i][1] - 1;
        const val = bookings[i][2];
        diff.diffSum(index, j, val); // 差分操作
    }
    return diff.prefixSum(); // 求前缀和
};
// @lc code=end
