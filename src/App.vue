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

<script setup>
import draggable from "vuedraggable"
import useLowCodeStore from "@/store/lowcode"
import Button from "./components/element/vButton/index"
import Input from "./components/element/input/index.vue"
import ButtonSet from "./components/element/vButton/vButtonAttr.vue"
import InputSet from "./components/element/input/set.vue"

const store = useLowCodeStore()

const componentsList = {
  button: Button,
  input: Input,
  "button-set": ButtonSet,
  "input-set": InputSet,
}

const onEnd = (obj) => {
  const { oldDraggableIndex } = obj
  store.nowComponentsData(store.component[oldDraggableIndex])
}
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  display: flex;
  .left {
    flex: 1;
    .left__element_area {
      height: 100%;
    }
  }
  .content {
    flex-basis: 50%;
    background-color: #f8f8f8;
    .content__canvas_area {
      height: 100%;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
