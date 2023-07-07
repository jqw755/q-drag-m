# Q-DRAG-M

## 介绍

Q-DRAG 低代码平台，M 指移动端（仅供学习交流）。为移动端而生，可视化拖拽编辑生成页面，提升开发效率

使用基于 vue3 + element-plus + vant4。

用规范的 Json 来描述组件，然后用组件属性解析器来解析、构造组件的属性面板。更新组件时只需要在属性面板修改对应参数即可。最后提供 JSON Schema 生成器生成页面组成的 Json，避免手动修改 Json。

[源码]()

[在线体验]()

### 安装

1. npm install
2. npm run serve
3. npm run build

##### 自定义组件

```text
src / pages / layout / index.vue           // 主容器
src / pages / layout / header / top.vue    // 顶部操作栏
src / pages / home / left-aside.vue        // 左侧组件列表区
src / pages / home / render-container.vue  // 中间组件渲染区
src / pages / home / right-aside.vue       // 右侧组件属性区
src / components                           // 组件存放目录
src / utils / componentProps.ts            // 各组件属性数据
```

#### componentProps.ts 组件数据字段注解

```js
{
  component: 'custommodule',    // 中间部分手机组件的name
  text: '自定义模块',            // 组件文字描述
  type: '1-14',                 // data-tpye
  active: true,                 // 是否选中
  style: 'custommodulestyle',   // 右边组件设置的name
  setStyle: {}                  // 组件动态数据
}
```
