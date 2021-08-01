---
title: slot
group:
  title: Vue
  order: 3
---

<Alert>
  个人见解，不要胡喷乱造，感谢🙏。下面的<code>api</code>均建立在<code>v2.6.x</code>的基础上进行。即不会出现<code>slot</code>和<code>slot-scope</code>这两个属性。 <code>v-slot:name='slotProps'</code>可简写为 <code>#name='slotProps'</code>
</Alert>

# Slot

slot 一直是存在的。 渗透在每个组件内部。 我的理解可以认为 `slot(Vue) === children(React)`

## 一个例子

```html
<!-- 见下方🌰中basic.vue -->
<!-- 1. Button.vue -->
<button>
  <slot />
</button>

<!-- 2. basic.vue -->
<form>
  <CustomButton>buttonContent</CustomButton>
</form>
```

这里可以看出来`slot`的实际作用是作为内容分发的作用，可以在自定义组件内部指定位置添加指定的内容。

## 作为组件默认内容渲染

当一个组件在不传入 context 的情况下进行默认 context 渲染时(不要和我扯 props,我在说 slot)

```html
<!-- 1. defaultButton.vue -->
<button>
  <slot> defaultButtonContext </slot>
</button>

<!-- 2. defaultSlot.vue -->
<form>
  <DefaultButton />
  <DefaultButton>customerContext</DefaultButton>
</form>
```

## 具名插槽

这个要好好掰扯掰扯， 真是要感谢 7 酱为我解惑～ 感恩胖 7 ～

具名插槽适用于多个插槽并存的情况，区分插槽内容。

### 举个官方的具名插槽的 🌰

```html
<!-- baseLayout.vue -->
<div class='container'>
  <header>
    <slot name='header'/>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <slot name='footer'/>
  </footer>
</div>

<!-- layout.vue -->
<BaseLayout>
  <template #header>
    <h1>title</h1>
  </template>

  <article>这是内容部分<article>
  <code>我会出现在main标签里</code>

  <!-- 中间这一部分也可以写成 -->
  <template #default>
    <article>这是内容部分<article>
    <code>我会出现在main标签里</code>
  </template>

  <template #footer>
    <p>footer content</p>
  </template>
</BaseLayout>
```

> 不带 name 的 slot 会自带 default 的出口名。会自动包容除具名以外的所有内容。

### 关于作用域

让插槽访问子组件的数据。本身插槽是动态的，当嵌在子组件内部时，如果可以访问到子组件中的数据有时是很有用的。

```html
<!-- ScopeSlot.vue -->
<template>
  <div class="slot">
    <slot name="scope" />
    <br />
    <slot name="scopename" :slotprops="slotData" />
  </div>
</template>

<script>
  export default {
    name: 'ScopeSlot',
    data() {
      return {
        slotData: { name: 'scopeSlot', slotNum: 1 },
      };
    },
  };
</script>

<!-- scope.vue -->
<template>
  <ScopeSlot>
    <template #scope>{{ slotData.name }}</template>
    <template #scopename="{ slotprops }">{{ slotprops.name }}</template>
  </ScopeSlot>
</template>

<script>
  import ScopeSlot from '../components/ScopeSlot';
  export default {
    name: 'scope',
    components: {
      ScopeSlot,
    },
    data() {
      return {
        slotData: { name: 'scope', slotNum: Infinity },
      };
    },
  };
</script>
```

在 slot 上绑定当前子组件内部变量，即可在使用当前组件插槽时使用子组件内部共享的状态。共享变量在使用时可以使用解构的方式进行获取，完全符合 es6 的解构赋值。  
这里注意默认插槽的缩写不可与具名插槽混用，会导致作用域不明确。
