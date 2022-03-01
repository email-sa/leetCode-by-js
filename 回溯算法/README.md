## 回溯算法 （DFS 遍历）

https://labuladong.gitee.io/algo/4/29/109/

使用这个短发解题的时候需要思考三个问题
1、路径：也就是已经做出的选择。

2、选择列表：也就是你当前可以做的选择。

3、结束条件：也就是到达决策树底层，无法再做选择的条件。

整体遍历框架

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
