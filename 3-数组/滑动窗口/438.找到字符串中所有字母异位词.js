/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 * 题目：
 * 找到 s 中所有 p 的 异位词 的子串的开始索引[]
 *
 * 1、当移动 right 扩大窗口，即加入字符时，应该更新哪些数据？
 * 记录是否有目标字符，更新目标字符的出现次数
 * 记录目标字符长度
 * 2、什么条件下，窗口应该暂停扩大，开始移动 left 缩小窗口？
 * 必须是连续的
 * valid == need.size并且长度==str时就是连续的，就是目标字符串
 *
 * 3、当移动 left 缩小窗口，即移出字符时，应该更新哪些数据？
 * windowMap 搜索字符map和valid
 *
 * 4、我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？
 * 缩小串口的时候，更新结果
 *
 *
 * 解题思路总结
 * 1. 定义存放搜索字符的map和目标字符的map
 * 2. 对字符串的长度进行判断
 * 3. 初始化目标字符map，记录目标字符中字符出现的次数
 * 4. 初始化窗口左右两端，右节点始终 < 字符s的长度，valid记录窗口中目标字符串的长度
 * 5. 开始从左往右滑动，滑动过程中，更新windowMap，valid
 * 6. 包含全部目标字符时，才开始调整左节点，左节点不断增加，左移窗口更新windowMap，valid
 *
 */
var findAnagrams = function (s, p) {
    let need = new Map(), // 需要凑齐的字符
        windowMap = new Map(); // 记录窗口中的字符和出现的次数
    let t = p;
    let sLen = s.length,
        tLen = t.length;
    if (tLen > sLen) {
        return [];
    }
    // 初始化目标字符的出现次数
    for (let i = 0; i < tLen; i++) {
        let str = t[i];
        let val = need.get(str);
        need.set(str, (val ?? 0) + 1); // 可能存在重复字符的情况
    }

    let left = 0,
        right = 0; // 初始化窗口两端，从0开始
    let valid = 0; // 窗口满足 need 条件的字符个数，==need。size（）的时候，说明窗口满足条件已经完全覆盖t
    //   记录最小覆盖子串的起始索引及长度
    let start = 0,
        len = Infinity,
        result = [];
    while (right < sLen) {
        // 开始从左往右滑动
        let c = s[right]; // c 是将移入窗口的字符
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
        while (right - left >= tLen) {
            //取字符串长度，可能存在重复字符
            // 在这里更新最小覆盖子串
            if (valid == need.size) {
                result.push(left);
            }
            // d 是将移出窗口的字符
            let d = s[left];
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
    return result;
};
// @lc code=end
