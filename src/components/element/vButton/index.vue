<template>
  <el-button :type="props.data.props.type">{{ props.data.name }}</el-button>
</template>
<script setup>
const props = defineProps({
  data: Object,
})
</script>
