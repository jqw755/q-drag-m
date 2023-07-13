<template>
  <div :class="{ 'is-topping': data.topping }">
    <van-search
      v-model="data.value"
      :clearable="false"
      :placeholder="data.placeholder"
      :input-align="data.align"
      :background="data.background"
      :readonly="data.readonly"
      @search="onSearch"
    />
    <!-- 删除 -->
    <slot name="delSlot"> </slot>
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
