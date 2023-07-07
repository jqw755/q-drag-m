<template>
  <div class="layout-top__ele">
    <div></div>
    <div class="right-action_wrap">
      <el-button class="top-btn__item" type="primary">
        <q-icon name="q-drag-icon_wenben" color="#ffffff" class="mr-5" />
        预览
      </el-button>
      <el-button class="top-btn__item" type="info">
        <q-icon name="q-drag-yulan" color="#ffffff" class="mr-5" />
        查看JSON
      </el-button>
      <el-button class="top-btn__item" type="info">
        <q-icon name="q-drag-yunduanshangchuan" color="#ffffff" class="mr-5" />
        导入JSON
      </el-button>
      <el-button class="top-btn__item" type="info">
        <q-icon name="q-drag-yunduanxiazai" color="#ffffff" class="mr-5" />
        导出JSON
      </el-button>
      <el-button class="top-btn__item" type="danger">
        <q-icon name="q-drag-zhongzhi" color="#ffffff" class="mr-5" />
        重置
      </el-button>
      <input type="file" ref="file" id="file" accept=".json" class="hide" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from "element-plus"

/* methods */
</script>

<style scoped lang="scss">
.mr-5 {
  margin-right: 5px;
}
.hide {
  display: none;
}
.layout-top__ele {
  width: 100%;
  height: 80px;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
