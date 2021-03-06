---
title: Question
---

### 基础问答

- `html5`有哪些新特性？移除了哪些元素？如何处理`html5`新标签的浏览器兼容问题？如何区分`html`和`html5`？

```js
  HTML5现在已经不是SGML的子集，主要是关于图像、位置、存储、多任务等功能的增加。
    * canvas
    * video、audio
    * localStorage、sessionStorage
    * article、footer、header、div、section
    * time、 date
    * webworker、websocket、geolocation
    * 移除部分元素：basefont、big、center、font、s、strike、tt、u、frame、frameset、noframes
  可以利用document.createElement产生新的标签，达到在IE8/7/6这些浏览器里支持新标签，但要增加对应的默认样式。也可使用
  <!--[if lt IE 9]>
    <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
  <![endif]-->
  是否使用DOCTYPE声明、是否新增结构元素等都可以作为区分HTML和HTML5的标准。
```

> `SGML`是标准通用标记语言，具有极好的扩展性。一般都需要包含`DTD(!DOCTYPE)`

- `html`语义化

```markdown
首先，内容结构化，结构清晰，更利于浏览器或搜索引擎解析，更好的 SEO  
在脱离 css 的情况下以文档格式展示，容易阅读  
阅读源码更便于分块， 便于理解和维护
```

- `cookie`、`localStorage`、`sessionStorage`的区别？

```
cookie: 标识用户身份并存储在用户本地终端上的数据，一般均会加密，始终在同源的http请求中携带在浏览器和服务器间来回传递， 大小不超过4k，设置时效内一直有效
sessionStorage: 存储在浏览器本地， 大小5M或以上， 数据在浏览器窗口关闭之后自动删除。
localStorage:  存储在浏览器本地， 大小5M或以上， 数据永久存储， 浏览器关闭后数据不丢失除非手动删除数据。
```
