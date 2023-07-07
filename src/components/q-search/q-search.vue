<template>
  <div :class="{ 'is-topping': data.topping }">
    <van-search
      v-model="value"
      :placeholder="data.placeholder"
      :shape="data.shape"
      :background="data.background"
      :readonly="data.readonly"
    />
  </div>
</template>
<script lang="ts">
export default { name: "QSearch" }
</script>
<script setup lang="ts">
import { ref } from "vue"
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const value = ref("")
</script>
<style>
.is-topping {
  position: sticky;
  top: 0;
}
</style>
