// 各组件属性
const componentProps = new Map()

// 搜索框
componentProps.set("q-search", {
  id: "1-1",
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
  id: "1-2",
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

// 按钮
componentProps.set("q-button", {
  id: "1-3",
  name: "按钮",
  active: false, //选中状态
  componentName: "q-button", // 对应左侧组件的componentName
  setName: "q-button-set", // 对应左侧组件的setName
  onlyOne: false,
  style: {
    title: "按钮",
    text: "按钮",
    type: "primary", // 按钮类型
    width: 70,
    height: 42,
    color: "", // 背景色
    icon: "",
    iconPosition: "left",
    plain: false, // 朴素按钮
    round: true, // 圆角按钮
    isBottom: false,
    url: "", // 跳转链接
    eventName: "",
  },
})

// 图片
componentProps.set("q-image", {
  id: "1-4",
  name: "图片",
  active: false,
  componentName: "q-image",
  setName: "q-image-set",
  onlyOne: false,
  style: {
    title: "图片",
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    width: 375,
    height: 375,
    round: false,
  },
})

// 分隔
componentProps.set("q-separate", {
  id: "1-5",
  name: "分隔",
  active: false,
  componentName: "q-separate",
  setName: "q-separate-set",
  onlyOne: false,
  style: {
    title: "分隔",
    width: 375,
    height: 20,
    background: "#f1f1f1",
  },
})

// 回到顶部
componentProps.set("q-back-top", {
  id: "1-6",
  name: "回到顶部",
  active: false,
  componentName: "q-back-top",
  setName: "q-back-top-set",
  onlyOne: true,
  style: {
    title: "回到顶部",
    right: 10,
    bottom: 15,
    teleport: ".phone-wrap",
  },
})

// 商品
componentProps.set("q-goods", {
  id: "2-1",
  name: "商品",
  active: false,
  componentName: "q-goods",
  setName: "q-goods-set",
  onlyOne: false,
  style: {
    title: "商品",
    goodsName: "名称",
    desc: "描述",
    num: 0,
    price: 0,
    originPrice: 0,
    thumb: "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    // 商品标签
    tags: [],
  },
})

// 优惠券
componentProps.set("q-coupon", {
  id: "2-2",
  name: "优惠券",
  active: false,
  componentName: "q-coupon",
  setName: "q-coupon-set",
  onlyOne: false,
  style: {
    title: "优惠券",
  },
})

export default componentProps
