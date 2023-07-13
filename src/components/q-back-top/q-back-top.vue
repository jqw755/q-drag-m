<template>
  <van-back-top
    :right="data.right + 'vw'"
    :bottom="data.bottom + 'vh'"
    :teleport="data.teleport"
    style="position: absolute"
  />
</template>
<script lang="ts">
export default { name: "QBackTop" }
</script>
<script setup lang="ts">
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})
</script>
