# Q-DRAP-M

## 介绍

Q-DRAP 低代码平台，M 指移动端（仅供学习交流）。为移动端而生，可视化拖拽编辑生成页面，提升开发效率

使用基于 vue3 + element-plus + vant4

[源码]()

[在线体验]()

### 安装教程

1. npm install
2. npm run serve
3. npm run build

##### 自定义组件可以看

```text
src / layout / home / index.vue           // 主容器页面

src / utils / componentProp.ts            // 各组件数据
```

#### componentProp 组件数据字段注解

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
