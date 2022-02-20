/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === 1) {
        return reverseN(head, right);
    }
    // 前进到反转的起点触发 base case,left==1的节点
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head; // 反转后的链表
};
// 反转以 head 为起点的 n 个节点，返回新的头结点
let preHead = null; // 前驱节点
let reverseN = (head, n) => {
    // 反转当前位节点
    if (n === 1) {
        preHead = head.next; // 记录第 n + 1 个节点
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    let last = reverseN(head.next, n - 1);
    // 反转后的头结点的下一个节点是head
    head.next.next = head;
    // 返回反转后的后后驱节点，n+1节点,原来的头结点指向n+1节点
    head.next = preHead;
    return last; // 返回翻转后的链表
};
// @lc code=end
