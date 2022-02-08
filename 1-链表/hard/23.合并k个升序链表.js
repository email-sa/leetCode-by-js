/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return lists;
    let dummyHead = null;
    for (let i = 0; i < lists.length; i++) {
        dummyHead = sortList(lists[i], dummyHead);
    }
    return dummyHead.next;
};
var sortList = (l1, l2) => {
    if (l1 == null || l2 == null) {
        return l1 != null ? l1 : l2;
    }
    let list = new ListNode(0);
    let dummyHead = list;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            dummyHead.next = l1;
            l1 = l1.next;
        } else {
            dummyHead.next = l2;
            l2 = l2.next;
        }
        dummyHead = dummyHead.next;
    }
    dummyHead.next = l1 ? l1 : l2;
    return list.next;
};
// @lc code=end
