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
    title: "按钮",
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
    title: "搜索框",
    value: "", // 输入框输入的内容
    placeholder: "请输入内容",
    align: "left", // 是否居中 可选值left right center
    background: "#ffffff",
    readonly: false, // 搜索框是否只读
    topping: false, // 是否置顶
    eventName: "", // 查询回调
  },
})

export default componentProps
