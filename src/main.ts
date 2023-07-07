import { createApp } from "vue"
import App from "./App.vue"
import "./assets/base.css"
import router from "./router/route"

// 全局注册自定义组件
import gComponents from "./components/index"

// 全局注册vant
import Vant from "vant"
import "vant/lib/index.css"

createApp(App).use(router).use(Vant).use(gComponents).mount("#app")
