<template>
  <view>
    <!-- <van-image round fit="cover" width="10rem" height="10rem" src="/static/cat.jpeg" /> -->
    <van-search
      use-action-slot
      shape="round"
      placeholder="请输入搜索关键词"
      background="#d3dfe8"
      :change="onChanges"
      :search="onSearch"
      class="van-search"
    >
      <view slot="action" @click="search">搜索</view>
    </van-search>
    <van-cell-group inset>
      <van-cell title="单元格" value="内容" v-for="(item, index) in list" @key="index" />
      <van-cell title="单元格" value="内容" label="描述信息" border="{{ false }}" />
    </van-cell-group>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";

const a = ref("");
const active = ref(0);
// const list = reactive([
//   {title: "沙子", value:}
// ])

// async function tryy() {
//   const res = await uni.request({
//     url: "http://lab.lumos.fit/api/reagent",
//     data: {
//       name: "silicon",
//       brand: "earth",
//       date: "2022.02.02",
//       purity: "22",
//       capacity: "22",
//       location: "earth",
//       type: "liquid",
//       control: "2",
//       solution: "drink",
//       operation: "0",
//       limitation: "22"
//     },
//     method: "post",
//     success(res) {
//       console.log(res.data, "成功");
//     }
//   });
// }

async function search() {
  // Toast("搜索" + this.data.value);
  uni.showToast({
    title: "正在搜索",
    duration: 1000
  });
  const res = await uni.request({
    url: "http://lab.lumos.fit/api/reagent?limit=5&page=1&name=silicon"
  });
  if (res) {
    console.log(res);
  }
}
</script>

<style>
.van-search {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
