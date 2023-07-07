<template>
  <svg class="icon" aria-hidden="true" :style="{ color: color, fontSize: size + 'px' }">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: "QIcon",
}
</script>
<script setup lang="ts">
import { computed } from "vue"
import "@/utils/iconfont.js"

const props = defineProps({
  name: String,
  color: {
    type: String,
    default: "#333333",
  },
  size: {
    type: String,
    default: "14",
  },
})

const iconName = computed(() => {
  return `#${props.name}`
})
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
