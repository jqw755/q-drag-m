<template>
  <section class="layout">
    <!-- 头部操作按钮区域 -->
    <header-nav />

    <!-- 主体 -->
    <div class="layout-main__ele">
      <!-- 左侧组件列表 -->
      <left-aside />

      <!-- 组件集合渲染区域 -->
      <div class="layout-middle__content">
        <render-container @setComData="setComData" />
      </div>

      <!-- 组件对应的属性编辑区域 -->
      <right-aside :data="curComponentData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import headerNav from "./header/top.vue"
import leftAside from "../home/left-aside.vue"
import rightAside from "../home/right-aside.vue"
import renderContainer from "../home/render-container.vue"
import { ICom } from "@/utils/type"

/* data */
const curComponentData = ref(<ICom>{})

/* methods */
// 获取当前组件属性数据
const setComData = (data: ICom) => {
  curComponentData.value = data
}
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  min-width: 1100px;
  padding-left: 50px;
}
.layout-main__ele {
  display: flex;
  height: calc(100% - 81px);
  .layout-middle__content {
    flex: 1;
    min-width: 500px;
    padding: 0 30px;
    background: $bg-color-primary;
  }
}
</style>
