import type { App } from "vue"
import QIcon from "./q-icon/index.vue"

const components = [QIcon]

// 定义 install 方法
const install = (app: App): void => {
  components.forEach((component) => app.component(component.name, component))
}
export { QIcon }
const QUI = {
  install,
}
export default QUI
