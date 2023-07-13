<template>
  <div class="q-goods-wrap">
    <van-card
      :num="data.num"
      :price="data.price"
      :origin-price="data.originPrice"
      :desc="data.desc"
      :title="data.goodsName"
      :thumb="data.thumb"
    >
      <template #tags>
        <van-tag plain type="primary" v-for="tagName in data.tags">{{ tagName }}</van-tag>
      </template>
    </van-card>
    <!-- 删除 -->
    <slot name="delSlot"> </slot>
  </div>
</template>
<script lang="ts">
export default { name: "QGoods" }
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
const onClick = () => {}
const allEventList = reactive(<any>{
  onClick: () => {
    console.log("点击")
    alert("点击")
  },
})
</script>
<style lang="scss"></style>
