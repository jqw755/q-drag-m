/// <reference types="vite/client" />
declare module "*.vue" {
  import { App, defineComponent } from "vue"

  const component: ReturnType<typeofdefineComponent> & {
    install(app: App): void
  }

  export default component
}
