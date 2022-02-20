/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
    this.nums = []; // 数值数组
    this.result = []; // 操作状态
    this.indexValMap = new Map();
    this.valMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 * 添加元素
 * 更新【值-索引】的map数据
 * 更新结果数组
 * 更新状态数组
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.indexValMap.has(val)) {
        return false;
    } else {
        let index = this.nums.push(val);
        let indexs = this.valMap.get(val) ?? [];
        if (indexs) {
            indexs.push(index - 1);
        }
        this.valMap.set(val, indexs);
    }
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 * 删除元素
 * 更新【值-索引】的map数据
 * 更新结果数组
 * 更新状态数组
 */
RandomizedSet.prototype.remove = function (val) {
    console.log("*--", val);
    if (this.valMap.has(val)) {
        let index = this.valMap.get(val);
        this.nums.splice(index[0], 1);
        this.valMap.set(val, index.slice(1));
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    if (this.nums?.length === 1) {
        return this.nums[0];
    } else {
        let random = Math.floor(Math.random() * 0.5) - 1 - this.nums?.length;
        return this.nums[random];
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
