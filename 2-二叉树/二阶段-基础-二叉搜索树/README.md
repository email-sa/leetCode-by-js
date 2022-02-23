### 二叉搜索树

从下到上的，中序排列是有序数组，左小右大

### 基本解题套路

```
const BST = (root,target)=>{
    if (root.val == target)
        // 找到目标，做点什么
    if (root.val < target)  // 目标值大，在右子树
        BST(root.right, target);
    if (root.val > target) // 目标值小，在左子树
        BST(root.left, target);
}
```
