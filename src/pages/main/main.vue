<script setup>
import { ref } from 'vue';
import Search from './search/search.vue';
const active = ref(0);

function tabChange(e) {
  active.value = e.detail;
}
</script>

<template>
  <view>
    <Search v-if="active === 0" />
    <van-tabbar :active="active" @change="tabChange">
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<style scoped lang="scss">
</style>