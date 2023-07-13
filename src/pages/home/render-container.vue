<template>
  <div class="render-container">
    <!-- 手机容器 -->
    <div class="phone-container">
      <!-- 状态栏图 -->
      <img src="../../assets/images/phone-status.png" alt="" class="phone-status-img" />
      <!-- 手机 -->
      <div class="phone-wrap" @drop="onDrop($event)" @dragover="onDrogOver($event)" @dragleave="onDragLeave($event)">
        <draggable :list="componentList" item-key="id">
          <template #item="{ element, index }">
            <component
              :is="element.componentName"
              :data="element.style"
              :class="['dynamic-component', { 'component-active': element.active }]"
              @click="activeComponentEvt(element, index)"
            >
              <template #delSlot>
                <span class="del-com-wrap" @click="onDelComponent(index)">
                  <q-icon name="q-drag-shanchu" color="#000000" />{{ element.name }}
                </span>
              </template>
            </component>
          </template>
        </draggable>
      </div>
    </div>
    <div class="phone-info-wrap">
      <p>设备宽高：375px * 667px</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
// import { ElMessage } from "element-plus"
import draggable from "vuedraggable"
import componentProps from "@/utils/componentProps"
import { ICom } from "@/utils/type"

/* props */

/* emits */
const emits = defineEmits(["setComData"])

/* data */
// 当前将要生成页面的对象
let pageData = ref({})
// 拖拽过来的组件列表
let componentList = ref(<ICom[]>[])
// 当前拖拽组件数据
let curComponent = ref(<ICom>{})

/* methods */
// 当在有效放置目标上放置元素或选择文本时触发此事件
const onDrop = (e: any) => {
  // 获取当前拖拽的元素
  const comName = e.dataTransfer.getData("componentName")
  const comData = componentProps.get(comName)
  if (!comData) return

  // 清除其余组件样式
  componentList.value.forEach((item) => (item.active = false))

  // 判断组件唯一性
  if (comData.onlyOne && componentList.value.some((it) => it.componentName === comData.componentName)) {
    ElMessage.warning(`${comData.name}只能存在一个`)
    return
  }
  curComponent.value = comData
  // 向componentList push
  const result = { ...comData, active: true }
  componentList.value.push(result)

  // 抛出组件属性给父组件，父组件再传给右侧属性组件
  emits("setComData", result)

  // 自动滚动到容器底部
  const phoneWrap = document.getElementsByClassName("phone-wrap")[0]
  setTimeout(() => {
    phoneWrap.scrollTop = phoneWrap.scrollHeight
  }, 0)
}

// 当将元素或文本选择拖动到有效放置目标（每几百毫秒）上时，会触发此事件
const onDrogOver = (e: any) => {
  // 阻止浏览器默认事件。因为默认是不允许元素放置的
  e.preventDefault()
}

// 当拖动的元素或文本选择离开有效的放置目标时，会触发此事件
const onDragLeave = (e: any) => {}

// 点击选中组件
const activeComponentEvt = (ele: ICom, index: number) => {
  componentList.value.forEach((item) => (item.active = false))
  ele.active = true
  curComponent.value = ele
  componentList.value[index] = ele
  emits("setComData", ele)
}

// 删除组件
const onDelComponent = (index: number) => {
  componentList.value.splice(index, 1)
  curComponent.value = <ICom>{}
  emits("setComData", {})
}
</script>

<style scoped lang="scss">
.render-container {
  width: 100%;
  padding: 60px 0;
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
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      .dynamic-component {
        position: relative;
        border: 1px solid #ffffff;
        &.component-active {
          border: 2px solid $primary-color;
        }
        .del-com-wrap {
          // display: none;
          padding: 10px 20px;
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          background: #ffffff;
          cursor: pointer;
          position: absolute;
          right: -50px;
          top: 0;
          z-index: 10;
        }
        &:hover {
          border: 1px dashed $primary-color;
          .del-com-wrap {
            display: inline-block;
          }
        }
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
