/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * 时间复杂度 getRandom 时间复杂度为 O(1)，insert 和 remove 平均时间复杂度为 O(1)，
 * 在最坏情况下为 O(N) 当元素数量超过当前分配的动态数组和哈希表的容量导致空间重新分配时
 * 空间复杂度 o(N)
 */

//
var RandomizedSet = function () {
    this.nums = []; // 数值数组
    this.valMap = new Map(); // 不会重复的数组 值-索引
};

/**
 * @param {number} val
 * @return {boolean}
 * 添加元素
 * 更新【值-索引】的map数据
 * 更新结果数组
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.valMap.has(val)) {
        return false;
    }
    let index = this.nums.push(val);
    this.valMap.set(val, index - 1);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 * 删除元素
 * 更新【值-索引】的map数据
 * 更新结果数组
 *
 * 删除元素，就将元素和最后一个元素交换位置，这样删除时 时间复杂度就是 O(1)
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.valMap.has(val)) {
        let len = this.valMap.size - 1;
        let temp = this.nums[len];
        let valIndex = this.valMap.get(val);
        // 更新最后一个元素的索引为val的原索引
        this.valMap.set(temp, valIndex);
        // 替换val和最后一个元素
        this.nums[len] = val;
        //数组中更新原索引值为最后一个元素的值
        this.nums[valIndex] = temp;
        // 删除最后一个元素
        this.nums.pop();
        this.valMap.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let random = parseInt(Math.random() * this.nums?.length);
    return this.nums[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
