/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * 递归
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l1;
    if (!l2) return l2;
    let sumHead = new ListNode(0);
    let temp = sumHead;
    let num = 0;
    temp = sumList(sumHead, num, l1, l2);

    return temp;
};
var sumList = (sumHead, num, l1, l2) => {
    if (!l1 && !l2) {
        // 如果求和最后的数 >10  则在最后补一位

        if (num > 0) return new ListNode(num);
        else return null;
    }
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + num;
    //  定义求和项到链表中
    sumHead = new ListNode(sum >= 10 ? sum % 10 : sum);

    num = sum >= 10 ? 1 : 0;
    if (l1) {
        l1 = l1.next;
    }
    if (l2) {
        l2 = l2.next;
    }
    // 当前这一项的后继节点是后面两个数的和，依次递归
    sumHead.next = sumList(sumHead, num, l1, l2);
    return sumHead;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 迭代
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l1;
    if (!l2) return l2;

    return sumList(l1, l2);
};
var sumList = (l1, l2) => {
    let sumHead = null;
    let temp = null;
    let num = 0;

    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + num;
        // temp 最后的结果的链表  sumHead 用于迭代的链表
        if (!temp) {
            temp = sumHead = new ListNode(sum >= 10 ? sum % 10 : sum);
        } else {
            //  new ListNode 定义链表结构 ，保持正常的链表结构
            sumHead.next = new ListNode(sum >= 10 ? sum % 10 : sum);
            sumHead = sumHead.next;
        }
        num = sum >= 10 ? 1 : 0;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 如果求和最后的数 >10  则在最后补一位
    if (num > 0) sumHead.next = new ListNode(num);
    return temp;
};
