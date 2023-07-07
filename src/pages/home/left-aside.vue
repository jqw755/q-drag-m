<template>
  <div class="layout-left__aside">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="item in componentList" :key="item.id" :name="item.id">
        <template #title>
          <h3>{{ item.title }}</h3>
        </template>
        <div class="com-item__wrap">
          <div
            v-for="com in item.componentList"
            :key="item.id"
            class="com-item__ele"
            draggable="true"
            @dragstart="dragStart($event)"
            :data-name="com.componentName"
          >
            <q-icon :name="com.icon" size="32" color="#6a625f" />
            <p>{{ com.name }}</p>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import leftComponentList from "@/utils/leftComponentList"
// 默认展开的项目
const activeNames = ref(["1"])
// 组件列表数组
const componentList = ref(leftComponentList)

// 开始拖拽
const dragStart = (e: any) => {
  e.dataTransfer.setData("componentName", e.target.dataset.name) // 设置数据类型为纯文本
}
</script>

<style scoped lang="scss">
.layout-left__aside {
  width: 320px;
  height: 100%;
  padding: 5px 12px 5px 26px;
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;
  background-color: #fff;

  :deep(.el-collapse) {
    border-top: 0;
    border-bottom: 0;
    .el-collapse-item__header {
      border-bottom: 0;
    }
    .el-collapse-item__wrap {
      border-bottom: 0;
    }
  }
  .com-item__wrap {
    display: flex;
    flex-wrap: wrap;
    .com-item__ele {
      flex-basis: 33%;
      padding: 15px 0 15px 0;
      cursor: move;
      text-align: center;
      color: #503327;
      &:hover {
        background: $border-color;
      }
    }
  }
}
</style>
