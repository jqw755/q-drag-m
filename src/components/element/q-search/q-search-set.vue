<!-- 组件属性 -->
<template>
  <div>
    <!-- 标题 -->
    <h2>{{ data.name }}</h2>
    <!-- 属性修改表单 -->
    <el-form :model="data" label-width="80px" size="small">
      <el-form-item label="输入占位">
        <el-input v-model="data.placeholder" />
      </el-form-item>
      <el-form-item label="圆角">
        <el-switch v-model="data.round" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="只读">
        <el-switch v-model="data.readonly" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="背景色">
        <el-color-picker v-model="data.background" show-alpha :predefine="predefineColors" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

const color = ref("#ffffff")
const predefineColors = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
])
</script>
