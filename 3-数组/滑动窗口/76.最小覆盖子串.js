/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// 框架
/* 滑动窗口算法框架 */
/**
 * 1、当移动 right 扩大窗口，即加入字符时，应该更新哪些数据？

2、什么条件下，窗口应该暂停扩大，开始移动 left 缩小窗口？

3、当移动 left 缩小窗口，即移出字符时，应该更新哪些数据？

4、我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？
 */
const slidingWindow = (s, t) => {
    let need = new Map(), // 需要凑齐的字符
        windowMap = new Map(); // 记录窗口中的字符和出现的次数
    let sLen = s.length,
        tLen = t.length;
    if (tLen > sLen) {
        return "";
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
        len = Infinity;
    while (right < sLen) {
        // 开始从左往右滑动
        let c = s[right]; // c 是将移入窗口的字符
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新 右移动 ...

        // if (need.get(c)) {
        //     let val = windowMap.get(c);
        //     windowMap.set(c, (val ?? 0) + 1);
        //     if (windowMap.get(c) === need.get(c)) {
        //         valid++;
        //     }
        // }
        /*** debug 输出的位置 ***/
        console.log("window: [%d, %d)\n", left, right, windowMap);
        /********************/
        // 判断左侧窗口是否要收缩
        while (valid == need.size) {
            // // 在这里更新最小覆盖子串
            // if (right - left < len) {
            //     start = left;
            //     len = right - left;
            // }
            // d 是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            // 左移动...
            // if (need.get(d)) {
            //     if (windowMap.get(d) === need.get(d)) {
            //         valid--;
            //     }
            //     let val = windowMap.get(d);
            //     windowMap.set(d, --val);
            // }
        }
    }
    // return len === Infinity ? "" : s.substring(start, len + start + 1);
};

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 题目
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串
 *
 * 思路：
 *滑动窗口算法的思路是这样：

1、我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引左闭右开区间 [left, right) 称为一个「窗口」。

2、我们先不断地增加 right 指针扩大窗口 [left, right)，直到窗口中的字符串符合要求（包含了 T 中的所有字符）。

3、此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right)，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。

4、重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

这个思路其实也不难，第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，最终找到最优解，也就是最短的覆盖子串。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动，这就是「滑动窗口」这个名字的来历。
 */
var minWindow = function (s, t) {
    let need = new Map(), // 需要凑齐的字符
        windowMap = new Map(); // 记录窗口中的字符和出现的次数
    let sLen = s.length,
        tLen = t.length;
    if (tLen > sLen) {
        return "";
    }
    for (let i = 0; i < tLen; i++) {
        let str = t[i];
        let val = need.get(str);
        need.set(str, (val ?? 0) + 1); // // 可能存在重复字符的情况
    }

    let left = 0,
        right = 0; // 初始化窗口两端，从0开始
    let valid = 0; // 窗口满足 need 条件的字符个数，==need。size（）的时候，说明窗口满足条件已经完全覆盖t
    //   记录最小覆盖子串的起始索引及长度
    let start = 0,
        len = Infinity;
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
        // console.log("window: [%d, %d)\n", left, right, windowMap);
        /********************/
        // 判断左侧窗口是否要收缩
        while (valid == need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
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
    return len === Infinity ? "" : s.substring(start, len + start + 1);
};
// @lc code=end
