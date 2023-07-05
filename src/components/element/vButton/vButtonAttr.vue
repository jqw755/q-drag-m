<!-- 组件属性 -->
<template>
  <el-button @click="() => set('primary')">默认</el-button>
  <el-button @click="() => set('success')">确认</el-button>
</template>
<script setup>
import useLowCodeStore from "@/store/lowcode"
const store = useLowCodeStore()

const set = (str) => {
  const value = store.nowComponent
  value.props.type = str
  store.updateNowComponents(value)
}
</script>
