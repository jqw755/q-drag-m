<template>
  <div :class="['q-button-wrap', { 'is-bottom': data.isBottom }]">
    <van-button
      :type="data.type"
      :plain="data.plain"
      :round="data.round"
      :size="data.size"
      :color="data.color"
      :icon="data.icon"
      :icon-position="data.iconPosition"
      :url="data.url"
      @click="onClick"
      :style="{ width: data.width + '%', height: data.height + 'px' }"
      >{{ data.text }}</van-button
    >
    <!-- 删除 -->
    <slot name="delSlot"> </slot>
  </div>
</template>
<script lang="ts">
export default { name: "QButton" }
</script>
<script setup lang="ts">
import { reactive } from "vue"
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const { data } = props

// 事件
const onClick = () => {
  const evName = data.eventName
  console.log(allEventList)
  console.log(allEventList[evName])
  if (evName) {
    allEventList[evName] && allEventList[evName]()
  }
}
const allEventList = reactive(<any>{
  onClick: () => {
    console.log("点击")
    alert("点击")
  },
})
</script>
<style lang="scss">
.q-button-wrap {
  text-align: center;
  &.is-bottom {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
