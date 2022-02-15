/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1 目标字符
 * @param {string} s2 长字符串
 * @return {boolean}
 * 题目：
 * 判断 s2 是否包含 s1 的排列，不含以外的字符
 * 
 * 1、当移动 right 扩大窗口，即加入字符时，应该更新哪些数据？
2、什么条件下，窗口应该暂停扩大，开始移动 left 缩小窗口？
3、当移动 left 缩小窗口，即移出字符时，应该更新哪些数据？
4、我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？
 */
var checkInclusion = function (s1, s2) {
    let need = new Map(), // 需要凑齐的字符
        windowMap = new Map(); // 记录窗口中的字符和出现的次数

    let tLen = s1.length,
        sLen = s2.length;
    if (tLen > sLen) {
        return "";
    }
    // 初始化目标字符的出现次数
    for (let i = 0; i < tLen; i++) {
        let str = s1[i];
        let val = need.get(str);
        need.set(str, (val ?? 0) + 1); // 可能存在重复字符的情况
    }

    let left = 0,
        right = 0; // 初始化窗口两端，从0开始
    let valid = 0; // 窗口满足 need 条件的字符个数，并且窃取的长度和目标一致时，说明窗口满足条件已经完全覆盖t
    while (right < sLen) {
        // 开始从左往右滑动
        let c = s2[right]; // c 是将移入窗口的字符
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新 右移动 ...
        if (need.get(c)) {
            let val = windowMap.get(c);
            windowMap.set(c, (val ?? 0) + 1);
            if (windowMap.get(c) === need.get(c)) {
                valid++;
            }
        }
        /*** debug 输出的位置 ***/
        // console.log("window: [%d, %d)\n", left, right, windowMap, valid);
        /********************/
        // 判断左侧窗口是否要收缩
        // 说明窗口满足条件已经完全覆盖
        while (right - left >= tLen) {
            // 长度大于等于目标字符的才行
            // 判断是否找到目标字符
            if (valid == need.size) {
                return true;
            }
            // d 是将移出窗口的字符
            let d = s2[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            // 左移动...
            if (need.get(d)) {
                if (windowMap.get(d) === need.get(d)) {
                    valid--;
                }
                let val = windowMap.get(d);
                windowMap.set(d, --val);
            }
        }
    }
    return false; // 未找到符合条件的
};

// @lc code=end
