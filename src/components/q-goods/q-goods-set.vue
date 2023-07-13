<!-- 组件属性 -->
<template>
  <div>
    <!-- 属性表单 -->
    <el-form :model="data" label-position="right" label-width="80px">
      <el-form-item label="商品名称">
        <el-input class="w-214" v-model="data.goodsName" clearable maxlength="200" />
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input class="w-214" v-model="data.desc" clearable maxlength="200" />
      </el-form-item>
      <el-form-item label="库存">
        <div class="w-214">
          <el-slider v-model="data.num" :min="0" :max="9999" :step="1" />
        </div>
      </el-form-item>
      <el-form-item label="现价">
        <div class="w-214">
          <el-input class="w-214" v-model="data.price" clearable maxlength="200" />
        </div>
      </el-form-item>
      <el-form-item label="原价">
        <div class="w-214">
          <el-input class="w-214" v-model="data.originPrice" clearable maxlength="200" />
        </div>
      </el-form-item>
      <el-form-item label="商品标签">
        <el-select v-model="data.tags" multiple placeholder="商品标签">
          <el-option :label="img.tagName" :value="img.tagName" v-for="img in goodstags" :key="img.id" />
        </el-select>
      </el-form-item>
      <!-- 待解决本地图片上传问题 -->
      <el-form-item label="商品图片">
        <el-upload v-model:file-list="goodsImgList" action="#" :limit="1" :show-file-list="false">
          <img v-if="data.thumb" :src="data.thumb" class="goods-img-preview" />
          <div v-else class="goods-img-upload">
            <q-icon name="q-drag-yunduanshangchuan" size="40" color="#939393"></q-icon>
          </div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"

// 组件属性对象
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
})

// 商品图
const goodsImgList = ref([])
const goodstags = ref([
  { id: 1, tagName: "促销" },
  { id: 2, tagName: "新品" },
])

watch(
  goodsImgList.value,
  (newObj: any) => {
    if (newObj) {
      props.data.thumb = newObj[0] && newObj[0].url
    }
  },
  { deep: true }
)
</script>
<style>
.w-214 {
  width: 214px;
}

.goods-img-preview {
  width: 160px;
}
.goods-img-upload {
  width: 160px;
  height: 160px;
  line-height: 160px;
  border: 1px solid #d9d9d9;
  text-align: center;
  border-radius: 10px;
}
</style>
