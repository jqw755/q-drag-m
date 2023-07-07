<template>
  <div class="render-container">
    <!-- 手机容器 -->
    <div class="phone-container">
      <!-- 状态栏图 -->
      <img src="../../assets/images/phone-status.png" alt="" class="phone-status-img" />
      <!-- 手机 -->
      <div class="phone-wrap" @drop="onDrop($event)" @dragover="onDrogOver($event)" @dragleave="onDragLeave($event)">
        <vue-draggable :list="componentList" item-key="id" ghost-class="ghost-class" class="phone-drag__wrap">
          <template #item="{ element }">
            <!-- <component :is="element.componentName"></component> -->
            {{ element.name }}
          </template>
        </vue-draggable>
      </div>
    </div>
    <div class="phone-info-wrap">
      <p>设备宽高：375px * 667px</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import vueDraggable from "vuedraggable"
import componentProps from "@/utils/componentProps"

/* interface */
interface ICom {
  id: string
  name: string
  value: string
  active: boolean //选中状态
  componentName: string // 对应左侧组件的componentName
  setName: string // 对应左侧组件的setName
  style: object
}

/* props */

/* data */
// 当前将要生成页面的对象
let pageData = ref({})
// 拖拽过来的组件列表
let componentList = ref(<ICom[]>[])
// 当前拖拽组件数据
let curComponent = ref({})

/* methods */
// 当在有效放置目标上放置元素或选择文本时触发此事件
const onDrop = (e: any) => {
  // 获取当前拖拽的元素
  const comName = e.dataTransfer.getData("componentName")
  const comData = componentProps.get(comName)
  curComponent.value = comData

  //
  componentList.value.push(comData)
}

// 当将元素或文本选择拖动到有效放置目标（每几百毫秒）上时，会触发此事件
const onDrogOver = (e: any) => {
  // 阻止浏览器默认事件。因为默认是不允许元素放置的
  e.preventDefault()
}

// 当拖动的元素或文本选择离开有效的放置目标时，会触发此事件
const onDragLeave = (e: any) => {}
</script>

<style scoped lang="scss">
.render-container {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  position: relative;
  .phone-container {
    width: 375px;
    margin: 0 auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    .phone-status-img {
      width: 100%;
    }
    .phone-wrap {
      width: 375px;
      height: 667px;
      background: #fff;
      overflow-x: hidden;
      overflow-y: auto;
      .phone-drag__wrap {
        // pointer-events: none;
      }
      .ghost-class {
        border: 1px dotted $primary-color;
      }
    }
  }
  .phone-info-wrap {
    width: 375px;
    margin: 10px auto 0;
    text-align: right;
    font-size: 12px;
    color: #b8b8b8;
  }
}
</style>
