<template>
  <div class="layout-right__aside">
    <p class="component-title">搜索框</p>

    <component :is="data.setName" :data="data.style"> </component>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
import { ICom } from "@/utils/type"

/* props */
const props = defineProps({
  data: {
    type: Object as PropType<ICom>,
    default: {},
  },
})
</script>

<style scoped lang="scss">
.layout-right__aside {
  width: 400px;
  height: 100%;
  padding: 5px 0 5px 0;
  border-left: 1px solid $border-color;
  background-color: #fff;
  .component-title {
    padding: 16px 24px 16px 24px;
    border-bottom: 1px solid #f2f4f6;
    font-size: 18px;
    font-weight: 600;
    color: #323233;
  }
}
</style>
