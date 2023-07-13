<template>
  <div>
    <div
      class="q-separate-wrap"
      :style="{ background: data.background, width: data.width + 'px', height: data.height + 'px' }"
    ></div>
    <!-- 删除 -->
    <slot name="delSlot"> </slot>
  </div>
</template>
<script lang="ts">
export default { name: "QSeparate" }
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
.q-separate-wrap {
  display: block;
}
</style>
