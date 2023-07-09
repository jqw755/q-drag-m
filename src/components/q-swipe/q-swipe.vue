<template>
  <div :class="{ 'is-topping': data.topping }">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
export default { name: "QSearch" }
</script>
<script setup lang="ts">
import { ref, reactive } from "vue"
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const { data } = props

const onSearch = () => {
  const evName = data.eventName
  if (evName) {
    allEventList[evName] && allEventList[evName]()
  }
}

// 事件
const allEventList = reactive(<any>{
  getList: () => {
    console.log(`根据${data.value}查询`)
    alert(`根据${data.value}查询`)
  },
})
</script>
<style>
.is-topping {
  position: sticky;
  top: 0;
}
</style>
