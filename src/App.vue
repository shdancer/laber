<template>
  <van-tabbar active="{{ active.value }}" :change="onChange">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
@import "/src/wxcomponents/vant/common/index.wxss";
</style>
