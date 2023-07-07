// import type { App } from "vue"
// import QIcon from "./q-icon/index.vue"
// import QButton from "./q-button/index.vue"
// import QSearch from "./q-search/index.vue"
// const components = [QIcon, QSearch]

// 定义 install 方法
// const install = (app: App): void => {
//   components.forEach((component) => app.component(component.name, component))
// }
// export { QIcon, QSearch }
// const QUI = {
//   install,
// }
// export default QUI

/* 
  2023/7/7 
  使用vite提供的import.meta.glob动态导入组件；
  import.meta.glob('*', { eager: true })为直接导入
*/
import type { App } from "vue"
import { defineAsyncComponent } from "vue"
const componentList = import.meta.glob("./*/*.vue")
// componentList内部格式为 =》  ./q-icon/index.vue: () => import("/src/components/q-icon/index.vue")

const install = (app: App): void => {
  for (const [key, value] of Object.entries(componentList)) {
    const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."))
    app.component(name, defineAsyncComponent(value as any))
  }
}

export default { install }
