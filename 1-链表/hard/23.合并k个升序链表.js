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
 * 21 题的进阶版
 * 思路：
 * 拆解成多个两个链表合并问题来解决
 * 时间复杂度 O（n^2）
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

// 或者使用二叉堆解决
/**
 * ListNode mergeKLists(ListNode[] lists) {
    if (lists.length == 0) return null;
    // 虚拟头结点
    ListNode dummy = new ListNode(-1);
    ListNode p = dummy;
    // 优先级队列，最小堆
    PriorityQueue<ListNode> pq = new PriorityQueue<>(
        lists.length, (a, b)->(a.val - b.val));
    // 将 k 个链表的头结点加入最小堆
    for (ListNode head : lists) {
        if (head != null)
            pq.add(head);
    }

    while (!pq.isEmpty()) {
        // 获取最小节点，接到结果链表中
        ListNode node = pq.poll();
        p.next = node;
        if (node.next != null) {
            pq.add(node.next);
        }
        // p 指针不断前进
        p = p.next;
    }
    return dummy.next;
}

 */
// @lc code=end
