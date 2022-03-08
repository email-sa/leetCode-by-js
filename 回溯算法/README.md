## 回溯算法 （DFS 遍历）

https://labuladong.gitee.io/algo/4/29/109/

使用这个短发解题的时候需要思考三个问题
1、路径：也就是已经做出的选择。

2、选择列表：也就是你当前可以做的选择。

3、结束条件：也就是到达决策树底层，无法再做选择的条件。

涉及到的题目

-   子集 90
-   组合 77 39 40
-   全排列 46 47

### 整体遍历框架

```javascript
result = []
const backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

```
  let result = []; // 结果
    let tack = []; // 路径
    const DFS = () => {
        // 存储结果

        // 同层遍历
        for (let i = 0; i < n; i++) {
            // 剪枝丫
            // 做选择
            // 下一层遍历
            // 撤销选择
        }
    };
    DFS();
    return result;
```
