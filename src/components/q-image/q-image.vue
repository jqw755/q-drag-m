<template>
  <div class="q-image-wrap">
    <van-image :width="data.width + 'px'" :height="data.height + 'px'" :src="data.src" :round="data.round" />
    <!-- 删除 -->
    <slot name="delSlot"> </slot>
  </div>
</template>
<script lang="ts">
export default { name: "QImage" }
</script>
<script setup lang="ts">
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const { data } = props
</script>
<style lang="scss">
.q-image-wrap {
  img {
    width: 100%;
  }
}
</style>
