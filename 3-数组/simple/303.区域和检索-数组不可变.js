/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 * 数组前缀和解法
 * 先求出，每个位置的总数和，再按位取值
 * 将前缀和数组 sums 的长度设为 n+1 的目的是为了方便计算sumRange(i,j)，不需要对i=0 的情况特殊处理
 * 时间复杂度 O(n) 遍历求和
 * 空间复杂度  O(n) 存储和的数组n+1个长度
 */
var NumArray = function (nums) {
    let n = nums.length;
    // this.arr = nums;
    this.preSum = new Array(n + 1).fill(0); // 用0占位，存储前面的元素之和
    // let sum = 0;
    // this.arr.forEach((element, index) => {
    //     sum += element;
    //     this.preSum[index + 1] = sum; // 从第0位向后补位
    // });
    for (let i = 0; i < n; i++) {
        this.preSum[i + 1] = this.preSum[i] + nums[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * 求 [1,4]的和，需要 sum[5]-sum[1]
 */
NumArray.prototype.sumRange = function (left, right) {
    // 目标位的总和 - 开始位的综合值
    return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
