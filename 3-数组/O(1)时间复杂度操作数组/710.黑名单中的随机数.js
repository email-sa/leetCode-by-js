/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 * 思路
 * 我们可以将[0,n)看做是数组，将黑明单的元素替换到数组后面
 * 取[0,n-blacklist.length] 之间的数
 * 时间复杂度 预处理时间复杂度 O(B) B是黑名单的长度 操作的时间复杂度O(1)
 * 空间复杂度 O(B)
 */
var Solution = function (n, blacklist) {
    this.blackMap = new Map();
    let len = blacklist.length;

    let size = n - len; // 最终数组中的元素个数
    this.len = size;
    // 黑名单元素记录在map中
    for (let val of blacklist) {
        this.blackMap.set(val, 666);
    }
    let last = n - 1; // n-1,最后一个元素的索引 !!
    for (let val of blacklist) {
        // 只需要处理[0,size),如果 val 已经在区间[size,n]，可以直接忽略 !!
        if (val >= size) {
            continue;
        }
        // 从后往前寻找不在黑名单中的数，找到之后就和名单中的元素相替换
        while (this.blackMap.has(last)) {
            last--;
        }
        // 将和黑单中的元素映射到正确的值，数组后面的是
        this.blackMap.set(val, last);
        last--;
    }
};

/**
 * @return {number}
 *  在区间 [0,N) 中等概率随机选取一个元素并返回
 *  这个元素不能是 blacklist 中的元素
 */
Solution.prototype.pick = function () {
    // 将黑名单的元素替换到数组后面
    let index = Math.floor(Math.random() * this.len); // [0-len区间的整数)
    console.log("index", index, this.blackMap);

    // 这个索引命中了黑名单，
    // 需要被映射到其他位置,就去黑名单中映射的值
    if (this.blackMap.has(index)) {
        return this.blackMap.get(index);
    }
    // 没命中的话就直接返回
    return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
