// 各组件属性
const componentProps = new Map()

// 按钮
componentProps.set("q-button", {
  id: "1-1",
  name: "按钮",
  value: "示例按钮",
  active: false, //选中状态
  componentName: "q-button", // 对应左侧组件的componentName
  setName: "q-button-set", // 对应左侧组件的setName
  style: {
    width: "",
    height: "",
    fontSize: "",
    color: "",
    background: "",
    borderColor: "",
  },
})

// 搜索框
componentProps.set("q-search", {
  id: "1-2",
  name: "搜索框",
  value: "",
  active: false, //选中状态
  componentName: "q-search", // 对应左侧组件的componentName
  setName: "q-search-set", // 对应左侧组件的setName
  style: {
    placeholder: "请输入内容",
    round: false, // 是否圆角
    background: "#ffffff",
    readonly: false, // 搜索框是否只读
  },
})

export default componentProps