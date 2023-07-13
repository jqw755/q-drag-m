<!-- 组件属性 -->
<template>
  <div>
    <!-- 属性表单 -->
    <el-form :model="data" label-position="right" label-width="80px">
      <!-- <el-form-item label="文字">
        <el-input class="w-214" v-model="data.text" clearable maxlength="200" />
      </el-form-item> -->
      <el-form-item label="宽高">
        <div class="w-214">
          <el-slider v-model="data.width" :min="1" :max="1000" :step="1" />
          <el-slider v-model="data.height" :min="1" :max="100" :step="1" />
        </div>
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="data.color" show-alpha :predefine="predefineColors" />
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

// 预设颜色
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
<style>
.w-214 {
  width: 214px;
}
</style>
