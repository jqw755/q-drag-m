import { defineStore } from "pinia"

const useLowCodeStore = defineStore({
  id: "lowcode", // id必填，唯一
  state: () => {
    return {
      component: [
        {
          code: "button",
          set: "button-set",
          name: "按钮",
          id: 1, //组件编号不可重复且递增
          props: {
            type: "primary",
          },
        },
        {
          code: "input",
          set: "input-set",
          name: "输入框",
          id: 2,
          props: {
            value: "",
            placeholder: "请输入内容",
          },
        },
      ],
      preview: [],
      nowComponent: {},
    }
  },
  actions: {
    nowComponentsData(value) {
      this.nowComponent = value
    },
    updateNowComponents(value) {
      this.nowComponent = value
      const index = this.preview.findIndex((item) => item.id === value.id)
      this.preview[index] = value
    },
  },
})

export default useLowCodeStore
