/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
// 节点
class Node {
    next;
    prev;
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}
// 双链表
class DoubleList {
    head;
    tail;
    size;
    constructor() {
        // 初始化双链表数据
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    // 在链表尾部添加节点 x ，时间O(1)
    addLast(x) {
        x.prev = this.tail.prev;
        x.next = this.tail;
        this.tail.prev.next = x;
        this.tail.prev = x;
        this.size++;
    }
    // 删除链表中的 x 节点 （x 一定存在）
    // 由于是双链表且给的是目标 Node 节点，时间 O(1)
    deleteNode(x) {
        x.next.prev = x.prev;
        x.prev.next = x.next;
        this.size--;
    }
    // 删除链表中的第一个节点，并返回该节点
    deleteFirst() {
        if (this.head.next === this.tail) {
            return null;
        }
        let head = this.head.next;
        this.deleteNode(head);
        return head;
    }
    // 返回链表长度
    linkLen() {
        return this.size;
    }
}
/**
 * @param {number} capacity
 * 思路：
 * 类似队列
 * 需要记录每次的添加后的缓存内容
 * 需要在每次操作get / put 之后更新key到缓存内容最后
 * put 之后要更新key 的值
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cacheMap = new Map();
    // this.cachesSet = new Set(); // Set 的遍历顺序就是插入顺序
    this.caches = new DoubleList();
    // 将某个key提升为最近使用的
    this.makeRecently = (key) => {
        let node = this.cacheMap.get(key);
        // 从链表中删除这个节点
        this.caches.deleteNode(node);
        // 重新插到队尾
        this.caches.addLast(node);
    };
    // 添加最近使用的元素
    this.addRecently = (key, val) => {
        let node = new Node(key, val);
        // 队尾添加节点
        this.caches.addLast(node);
        // 在map中添加节点的隐射
        this.cacheMap.set(key, node);
    };
    // 删除某一个key
    this.deleteNode = (key) => {
        let node = this.cacheMap.get(key);
        // 从链表中删除这个节点
        this.caches.deleteNode(node);
        // 在 map 中删除
        this.cacheMap.delete(key);
    };
    // 删除最久未使用的元素
    this.deleteLeastRecently = () => {
        // 从链表中删除这个节点
        let node = this.caches.deleteFirst();
        let deleteKey = node.key;
        // 在 map 中删除
        this.cacheMap.delete(deleteKey);
    };
};

/**
 * @param {number} key
 * @return {number}
 * 获取元素
 * 更新该key到数据最后
 */
LRUCache.prototype.get = function (key) {
    if (this.cacheMap.get(key)) {
        this.makeRecently(key);
        return this.cacheMap.get(key).val;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cacheMap.has(key)) {
        // 删除旧数据
        this.deleteNode(key);
        // 新插入的数据为最近使用
        this.addRecently(key, value);
        return;
    }
    if (this.caches.linkLen() === this.capacity) {
        this.deleteLeastRecently();
    }
    // 添加为最近使用
    this.addRecently(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
