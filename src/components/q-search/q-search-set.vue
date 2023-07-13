<!-- 组件属性 -->
<template>
  <div>
    <!-- 属性表单 -->
    <el-form :model="data" label-position="right" label-width="80px">
      <el-form-item label="输入占位">
        <el-input class="w-214" v-model="data.placeholder" clearable maxlength="200" />
      </el-form-item>
      <el-form-item label="内容对齐">
        <el-select v-model="data.align">
          <el-option label="居左" value="left" />
          <el-option label="居中" value="center" />
          <el-option label="居右" value="right" />
        </el-select>
      </el-form-item>
      <el-form-item label="只读">
        <el-switch v-model="data.readonly" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="置顶">
        <el-switch v-model="data.topping" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="背景色">
        <el-color-picker v-model="data.background" show-alpha :predefine="predefineColors" />
      </el-form-item>
      <el-form-item label="事件">
        <el-select v-model="data.eventName" placeholder="请选择事件">
          <el-option v-for="ev in eventList" :key="ev.fnName" :label="ev.label" :value="ev.fnName" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
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

const color = ref("#ffffff")
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
<style>
.w-214 {
  width: 214px;
}
</style>
