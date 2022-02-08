/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * 迭代
 * 先清除重复的数字，标记有重复数字的元素
 * 再清除有标记的元素
 */

var deleteDuplicates = function (head) {
    let temp = head;
    let repeat = new Map();
    // 删除重复的元素
    while (temp) {
        if (temp.next && temp.val === temp.next.val) {
            temp.val = temp.next.val;
            temp.next = temp.next.next;
            // 将重复过的数字存在map数据中
            repeat.set(temp.val, temp.val);
        } else temp = temp.next;
    }
    if (!head) return head;
    let cur = head.next;
    let pre = head;
    // 删除重复出现过的数字
    while (cur) {
        if (repeat.has(cur.val)) {
            pre.next = cur.next;
        } else pre = pre.next;
        cur = cur.next;
    }
    // 如果第一个节点就是重复的数字，就删除第一个节点
    if (head && repeat.has(head.val)) head = head.next;
    return head;
};
// var deleteDuplicates = function (head) {
//     let temp = head;
//     let pre = new ListNode();
//     pre.next = head;
//     let repeat = new Map();
//     let preHead = null;
//     while (pre.next) {
//         if (pre.val === pre.next.val || repeat.has(pre.val)) {
//             pre.next = pre.next ? pre.next.next : null;
//             repeat.set(pre.val, pre.val);
//         } else {
//             pre = pre.next;
//         }
//         console.log("*/", repeat, temp, head);
//     }
//     let cur = pre;

//     // while (cur) {
//     //     if (repeat.has(cur.val)) {
//     //         cur.next = cur.next ? cur.next.next : null;
//     //     }
//     //     // console.log("++", repeat.has(cur.val), cur);
//     //     else cur = cur.next;
//     // }
//     console.log("--", pre);
//     // console.log("*/", repeat, temp, head);
//     return pre;
// };
// @lc code=end
// var deleteDuplicates = function (head) {
//     let temp = head;
//     let repeat = new Map();
//     while (temp) {
//         if (temp.next) {
//             // 删除数据重复的元素
//             if (temp.val === temp.next.val) {
//                 temp.val = temp.next.val;
//                 temp.next = temp.next.next;
//                 repeat.set(temp.val, temp.val);
//             } else temp = temp.next;
//         } else {
//             if (repeat.has(temp.val)) {
//                 // 删除最后一个有重复数字的元素
//                 temp.val = temp.next ? temp.next.val : null;
//                 temp.next = temp.next ? temp.next.next : null;
//             }
//             temp = temp.next;
//         }
//     }
//     let cur = head;

//     // while (cur) {
//     //     console.log("--", cur);

//     //     if (repeat.has(cur.val)) {
//     //         cur.val = cur.next.val;
//     //         cur.next = cur.next.next;
//     //     }
//     //     // console.log("++", repeat.has(cur.val), cur);
//     //     else cur = cur.next;
//     // }
//     console.log("*/", repeat, temp, head);
//     return head;
// };
