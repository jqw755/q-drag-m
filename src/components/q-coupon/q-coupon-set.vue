<!-- 组件属性 -->
<template>
  <div>
    <!-- 属性表单 -->
    <el-form :model="data" label-position="right" label-width="80px">
      <el-form-item label="文字">
        <el-input class="w-214" v-model="data.text" clearable maxlength="200" />
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="data.type">
          <el-option label="主要" value="primary" />
          <el-option label="成功" value="success" />
          <el-option label="警告" value="warning" />
          <el-option label="错误" value="danger" />
        </el-select>
      </el-form-item>
      <el-form-item label="宽高">
        <div class="w-214">
          <el-slider v-model="data.width" :min="1" :max="100" :step="0.1" />
          <el-slider v-model="data.height" :min="16" :max="100" :step="1" />
        </div>
      </el-form-item>
      <el-form-item label="图标">
        <el-select v-model="data.icon" placeholder="图标" clearable>
          <el-option label="无" value="" />
          <el-option label="plus" value="plus" />
          <el-option label="cross" value="cross" />
          <el-option label="success" value="success" />
          <el-option label="like-o" value="like-o" />
          <el-option label="star-o" value="star-o" />
          <el-option label="phone-o" value="phone-o" />
          <el-option label="setting-o" value="setting-o" />
          <el-option label="replay" value="replay" />
        </el-select>
        <el-select v-model="data.iconPosition" placeholder="图标位置">
          <el-option label="居左" value="left" />
          <el-option label="居右" value="right" />
        </el-select>
      </el-form-item>
      <el-form-item label="朴素按钮">
        <el-switch v-model="data.plain" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="圆形按钮">
        <el-switch v-model="data.round" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="data.color" show-alpha :predefine="predefineColors" />
      </el-form-item>
      <!-- <el-form-item label="置底">
        <el-switch v-model="data.isBottom" inline-prompt active-text="是" inactive-text="否" />
      </el-form-item> -->
      <el-form-item label="点击跳转">
        <el-input
          class="w-214"
          v-model="data.url"
          placeholder="输入后，点击跳转不保留本页配置！"
          clearable
          maxlength="200"
        />
      </el-form-item>
      <el-form-item label="事件">
        <el-select v-model="data.eventName" placeholder="请选择事件" clearable>
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
    fnName: "onCLick",
    label: "点击事件",
  },
])
</script>
<style>
.w-214 {
  width: 214px;
}
</style>
