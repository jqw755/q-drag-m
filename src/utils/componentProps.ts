// 各组件属性
const componentProps = new Map()

// 按钮
componentProps.set("q-button", {
  id: "1-1",
  name: "按钮",
  active: false, //选中状态
  componentName: "q-button", // 对应左侧组件的componentName
  setName: "q-button-set", // 对应左侧组件的setName
  onlyOne: false,
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
  active: false, //选中状态
  componentName: "q-search", // 对应左侧组件的componentName
  setName: "q-search-set", // 对应左侧组件的setName
  onlyOne: true, // 只允许存在一个该组件
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

// 轮播
componentProps.set("q-swipe", {
  id: "1-3",
  name: "轮播",
  active: false, //选中状态
  componentName: "q-swipe", // 对应左侧组件的componentName
  setName: "q-swipe-set", // 对应左侧组件的setName
  onlyOne: false,
  style: {
    title: "轮播",
    // 轮播内容(目前仅支持图片)
    images: [
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    ],
    height: 200, // 滑块高度，单位为 px
    autoplay: 3000, // 自动轮播间隔，单位为 ms
    loop: true, // 是否开启循环播放
    showIndicators: true, // 是否显示指示器
    indicatorColor: "#16b52e", // 指示器颜色
  },
})

export default componentProps
