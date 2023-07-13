<template>
  <div :class="{ 'is-topping': data.topping }">
    <van-swipe
      :height="data.height"
      :autoplay="data.autoplay"
      :loop="data.loop"
      :showIndicators="data.showIndicators"
      :indicator-color="data.indicatorColor"
    >
      <van-swipe-item v-for="item in data.images" :key="item">
        <van-image :src="item" fit="contain" width="100%" height="100%">
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
export default { name: "QSwipe" }
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

// 事件
const allEventList = reactive(<any>{
  getList: () => {
    console.log(`事件`)
  },
})
</script>

<style lang="scss">
.is-topping {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
