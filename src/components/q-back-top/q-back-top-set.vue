<!-- 组件属性 -->
<template>
  <el-form :model="data" label-position="right" label-width="80px">
    <el-form-item label="位置">
      <div class="w-214">
        <el-slider v-model="data.right" :min="0" :max="100" :step="1" />
        <el-slider v-model="data.bottom" :min="0" :max="100" :step="1" />
      </div>
    </el-form-item>
    <el-form-item label="所在父级">
      <el-input class="w-214" v-model="data.teleport" clearable placeholder="输入所在父级元素的类名" maxlength="200" />
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
