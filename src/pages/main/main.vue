<script setup>
import { ref } from 'vue';
import Search from './search/search.vue';
import Approve from './approve/approve.vue';
const active = ref(2);
</script>

<template>
  <view class="main">
    <swiper :current="active" @change="active = $event.detail.current">
      <swiper-item></swiper-item>
      <swiper-item></swiper-item>
      <swiper-item>
        <Search />
      </swiper-item>
      <swiper-item>
        <Approve />
      </swiper-item>
      <swiper-item></swiper-item>
      <swiper-item></swiper-item>
    </swiper>
  </view>
  <van-tabbar :active="active" @change="active = $event.detail">
    <van-tabbar-item icon="orders-o">记录</van-tabbar-item>
    <van-tabbar-item icon="edit" class="item">管理</van-tabbar-item>
    <van-tabbar-item icon="bag-o" class="item">使用</van-tabbar-item>
    <van-tabbar-item icon="friends-o" class="item">人员</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="scss">
.main {
  height: 100vh;
  position: relative;
}
swiper {
  height: 100%;
}
swiper-item {
  height: 100%;
}
</style>