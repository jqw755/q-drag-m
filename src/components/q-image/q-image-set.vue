<!-- 组件属性 -->
<template>
  <!-- 属性表单 -->
  <el-form :model="data" label-position="right" label-width="80px">
    <el-form-item label="图片链接">
      <el-input class="w-214" v-model="data.src" clearable placeholder="图片链接" maxlength="200" />
    </el-form-item>
    <el-form-item label="宽高">
      <div class="w-214">
        <el-slider v-model="data.width" :min="1" :max="1000" :step="1" />
        <el-slider v-model="data.height" :min="1" :max="1000" :step="1" />
      </div>
    </el-form-item>
    <el-form-item label="圆形图片">
      <el-switch v-model="data.round" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})
</script>
<style>
.w-214 {
  width: 214px;
}
</style>
