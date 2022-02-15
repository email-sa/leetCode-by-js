/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
// import { Diff } from "./1094.拼车";
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
/**
 * @param {number[][]} trips 【val,i，j】
 * @param {number} capacity
 * @return {boolean}
 * 题目翻译
 *你是一个开公交车的司机，公交车的最大载客量为 capacity，
 沿途要经过若干车站，给你一份乘客行程表 int[][] trips，
 其中 trips[i] = [num, start, end] 
 代表着有 num 个旅客要从站点 start 上车，到站点 end 下车，
 请你计算是否能够一次把所有旅客运送完毕（不能超过最大载客量 capacity）。
 *
 * 思路
 * 由题目可知
 * 0 <= trips[i][1] < trips[i][2] <= 1000
 * 所以n =1001
 *
 * 最终结果是 是否超载，不超载也就是客车的任意一个元素都不能大于capacity
 */
var carPooling = function (trips, capacity) {
    let diff = new Diff(1001); //  // 最多有 1000 个车站
    for (let i = 0; i < trips.length; i++) {
        let val = trips[i][0]; // 乘客数量
        let start = trips[i][1]; // 上车
        // 第 trip[2] 站乘客已经下车，
        // 即乘客在车上的区间是 [trip[1], trip[2] - 1]
        let end = trips[i][2] - 1; // 下车
        diff.diffSum(start, end, val); // 上下车后的变化
    }

    let sum = diff.prefixSum();
    return !sum.some((item) => item > capacity); // 如果有元素>capacity,则超载
};
// @lc code=end
