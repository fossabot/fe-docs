### 盒子模型

1. w3c 盒子模型: content, padding, margin, border
2. ie 盒子模型: content 包含 border 和 padding

### display 有哪些值？

1. block: 块类型。 默认与父级等宽。
2. none: 元素不展示，并从文档流中移除。
3. inline: 行内元素类型。 由内容决定元素大小， 不可设置大小。
4. inline-block: 由内容决定元素大小， 可设置大小。
5. list-item: 与块元素表现一致， 增加列表样式。
6. table: 元素呈现为块级表格。
7. inherit: 继承父类的表现。

### chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示

```css
-webkit-text-size-adjust: none;
```

### 初始化 css 样式

```html
// 初始化样式也会影响seo，但最小程度会避免默认样式不统一而造成的兼容问题。
<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  blockquote,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  pre,
  form,
  fieldset,
  legend,
  button,
  input,
  textarea,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  body,
  button,
  input,
  select,
  textarea {
    font: 12px/1.5tahoma, arial, \5b8b\4f53;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }
  address,
  cite,
  dfn,
  em,
  var {
    font-style: normal;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: couriernew, courier, monospace;
  }
  small {
    font-size: 12px;
  }
  ul,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  sup {
    vertical-align: text-top;
  }
  sub {
    vertical-align: text-bottom;
  }
  legend {
    color: #000;
  }
  fieldset,
  img {
    border: 0;
  }
  button,
  input,
  select,
  textarea {
    font-size: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
```

### ::after 和:after 中双冒号和单冒号有什么区别？

- 单冒号(:)用于 css3 伪类, 双冒号(::)用于 css3 伪元素(伪元素由双冒号和伪元素名称组成)
- 双冒号是在当前规范中引入的，用于区分伪类和伪元素。 但浏览器依然支持旧的已存在的伪元素的写法。
- 而新的 css3 中引入的伪元素则不允许再支持旧的单冒号的写法。

- 按代码顺序：::after 生成的内容比::before 生成的内容靠后
- 按堆栈视角：::after 生成的内容会在::before 生成的内容之上

### 修改 chrome 记住密码后自动填充表单的黄色背景？

```html
<style>
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: white;
    background-image: none;
    color: black;
  }
</style>
```

### 让页面里的字体变清晰， 变细用 css 如何实现？

```html
<style>
  html {
    -webkit-font-smoothing: antialiased;
  }
</style>
```

### 手写动画最小时间间隔

多数显示器默认频率为 60Hz，即 1 秒刷新 60 次， 理论最小时间间隔为： 1/60\*1000ms = 16.7ms
