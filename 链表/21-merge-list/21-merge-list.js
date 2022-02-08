/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let preHeadList = new ListNode(-1);

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
