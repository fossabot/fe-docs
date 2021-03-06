---
group:
  title: HTML
  order: 1
---

### [insertAdjacentHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML)

将指定文本解析为 Element 元素，并将结果节点插入到 DOM 树的指定位置。它不会重新解析它正在使用的元素， 因此它不会破坏元素的现有元素，这避免了额外的序列化步骤，使其比直接使用 innerHTML 操作更快。

```javascript
element.insertAdjacentHTML(position, text);

/*
 * position: 表示插入内容相对于元素的位置，且须是以下字符串之一
 * beforebegin: 元素自身的前面
 * afterbegin: 插入元素内部的第一个子节点之前
 * beforeend: 插入元素内部的最后一个子节点之后
 * afterend: 元素自身的后面
 */

/*
 * text: 要被解析为HTML或XML元素
 */
```

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> 还有类似 api 比如: `insertAdjacentElement`、`insertAdjacentText`
