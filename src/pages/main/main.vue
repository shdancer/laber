<script setup>
import { ref } from 'vue';
import Search from './search/search.vue';
const active = ref(2);

</script>

<template>
  <view>
    <Search v-if="active === 2" />
    <van-tabbar :active="active" @change="active = $event.detail">
      <van-tabbar-item icon="orders-o">记录</van-tabbar-item>
      <van-tabbar-item icon="edit" class="item">管理</van-tabbar-item>
      <van-tabbar-item icon="bag-o" class="item">使用</van-tabbar-item>
      <van-tabbar-item icon="friends-o" class="item">人员</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">个人</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<style scoped lang="scss">
</style>