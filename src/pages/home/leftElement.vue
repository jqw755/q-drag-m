<template>
  <div class="app-container">
    <!-- 可拖拽元素区 -->
    <div class="left">
      <draggable
        v-model="store.component"
        :sort="false"
        :group="{
          name: 'components', //组名为icomponents
          pull: 'clone', //是否允许拖出当前组
          put: false, //是否允许拖入当前组
        }"
        item-key="id"
        class="left__element_area"
        @end="onEnd"
      >
        <template #item="{ element }">
          <div class="left__item_element">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <!-- 渲染区 -->
    <div class="content">
      <draggable
        v-model="store.preview"
        :group="{
          name: 'template',
          pull: false,
          put: true,
        }"
        item-key="id"
        ghost-class="ghost"
        class="content__canvas_area"
      >
        <template #item="{ element }">
          <component :is="componentsList[element?.code]" :data="element"></component>
        </template>
      </draggable>
    </div>
    <!-- 指定元素属性区 -->
    <div class="right">
      <component :is="componentsList[store?.nowComponent?.set]"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable"
import useLowCodeStore from "@/store/lowcode"

const store = useLowCodeStore()

const componentsList: any = {}

const onEnd = () => {}
</script>

<style scoped lang="scss"></style>
