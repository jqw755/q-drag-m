<!-- 组件属性 -->
<template>
  <el-form :model="data" label-position="right" label-width="100px">
    <el-form-item label="轮播图片"> </el-form-item>
    <el-form-item label="高度">
      <div class="w-214">
        <el-slider v-model="data.height" :min="100" :max="500" :step="100" />
      </div>
    </el-form-item>
    <el-form-item label="轮播间隔">
      <div class="w-214">
        <el-slider v-model="data.autoplay" :min="1000" :max="5000" :step="1000" />
      </div>
    </el-form-item>
    <el-form-item label="循环播放">
      <el-switch v-model="data.loop" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item label="显示指示器">
      <el-switch v-model="data.showIndicators" inline-prompt active-text="是" inactive-text="否" />
    </el-form-item>
    <el-form-item v-if="data.showIndicators" label="指示器颜色">
      <el-color-picker v-model="data.indicatorColor" show-alpha :predefine="predefineColors" />
    </el-form-item>
    <!-- <el-form-item label="事件">
      <el-select v-model="data.eventName" placeholder="请选择事件">
        <el-option v-for="ev in eventList" :key="ev.fnName" :label="ev.label" :value="ev.fnName" />
      </el-select>
    </el-form-item> -->
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from "vue"
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

// 事件列表
const eventList = reactive([
  {
    fnName: "getList",
    label: "回车(确认)查询列表",
  },
])
</script>
