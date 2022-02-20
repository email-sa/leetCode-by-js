/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路：
 * 1. 链表是有序的
 * 2. 中两个链表的head开始，定义p1，p2两个指针，同时遍历两个链表
 * 3. 定义一个空链表存储合并后的链表
 * 4. 两个指针，哪一个值更小，就添加到新链表的后面
 * 5. 知道遍历完任意一个链表
 * 6. 剩余未遍历的链表就补充在新链表最后
 */
var mergeTwoLists = function (l1, l2) {
    let preHeadList = new ListNode(-1); // 添加一个空的头指针
    let pre = preHeadList;
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            pre.next = l2;
            l2 = l2.next;
        } else {
            pre.next = l1;
            l1 = l1.next;
        }
        pre = pre.next;
    }
    pre.next = l1 === null ? l2 : l1;
    return preHeadList.next;
};
// @lc code=end
