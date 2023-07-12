<template>
  <div class="layout-right__aside">
    <p class="component-title">{{ data.style && data.style.title }}</p>
    <component :is="data.setName" :data="data.style"> </component>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { ICom } from "@/utils/type"

/* props */
const props = defineProps({
  data: {
    type: Object as PropType<ICom>,
    default: {},
  },
})
</script>

<style lang="scss">
.el-form {
  .el-form-item {
    .el-form-item__content {
      justify-content: flex-end;
    }
  }
}
</style>
<style scoped lang="scss">
.layout-right__aside {
  width: 400px;
  height: 100%;
  padding: 0 24px 0 20px;
  border-left: 1px solid $border-color;
  background-color: #fff;
  .component-title {
    padding: 16px 24px 16px 24px;
    border-bottom: 1px solid #f2f4f6;
    font-size: 18px;
    font-weight: 600;
    color: #323233;
    margin-bottom: 24px;
  }
}
</style>
