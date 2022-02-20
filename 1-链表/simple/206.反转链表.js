/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 * 记录前一个节点，将前后节点交换,添加到新链表中
 */
var reverseList = function (head) {
    if (head === null) return null;
    let headK = new ListNode(0);
    let temp = head;
    while (temp !== null) {
        // 链表headK 的下一个节点的值 为要翻转得链表，新的headK链表的值为原来的headK链表
        let cur = headK.next;
        headK.next = temp;
        temp = temp.next;
        if (headK.next) headK.next.next = cur;
    }
    return headK.next;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 记录前一个节点，将前后节点交换
 */
var reverseList = function (head) {
    if (head === null) return null;
    let pre = null;
    let temp = head;
    while (temp !== null) {
        // 将当前节点和后一个节点互换位置，直至链表为空
        const next = temp.next;
        temp.next = pre;
        pre = temp;
        temp = next;
    }
    return pre;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 尾递归法
 */
var reverseList = function (head) {
    if (!head || !head.next) return head;
    let next = reverseEnd(null, head); // 2
    return next;
};
var reverseEnd = (pre, head) => {
    // 如果没有后继节点，就返回上一个节点，不用翻转
    if (!head) return pre;
    let next = head.next;
    head.next = pre;
    return reverseEnd(head, next);
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归法
 * 前后两个元素之间交换顺序
 * 递归反转当前节点和后继结点
 */
var reverseList = function (head) {
    if (!head || !head.next) return head;
    let next = head.next;
    // 递归反转
    let reverseHead = reverseList(head.next);
    // 交换指针
    next.next = head;
    head.next = null;

    return reverseHead;
};

// @lc code=end
