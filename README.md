# Q-DRAG-M

## 介绍

Q-DRAG-M，为移动端而起的低代码平台（仅供学习交流）。可视化拖拽编辑生成页面，提升开发效率。

基于 vue3 + element-plus + vant4 开发

用规范的 Json 来描述组件，然后用组件属性解析器来解析、构造组件的属性面板。更新组件时只需要在属性面板修改对应参数即可。最后提供 JSON Schema 生成器生成页面组成的 Json，避免手动修改 Json。

后续记得完善 q-ui 组件，替换掉本项目中的 element-plus。

[源码](https://github.com/jqw755/q-drag-m)

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
src / utils / leftComponentList.ts         // 组件列表
src / utils / componentProps.ts            // 组件属性
```

#### componentProps.ts 组件数据字段注解

```js
{
  id: "1-2",                  // 组件id
  name: "搜索框",              // 组件名称
  value: "",                  // 组件默认值
  active: false,              // 组件选中状态
  componentName: "q-search",  // 需要渲染的组件name
  setName: "q-search-set",    // 渲染的组件的属性组件name
  style: {},                  // 渲染的组件props
}
```
