<template>
  <view class="main">
    <image src="../../static/theme.jpeg" mode="widthFix" />
    <view
      class="login-card"
      @touchmove="detectMove"
      @touchstart="detectStart"
      :style="{ 'height': cardHeight }"
    ></view>
  </view>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { useScrollUp } from "../../hook/useScrollUp";

const { scrolledUp, detectMove, detectStart } = useScrollUp();

const cardHeight = computed(() => {
  return scrolledUp.value ? "70%" : "20%";
})

</script>

<style>
.main {
  overflow: hidden;
  position: relative;
  height: 100vh;
}
image {
  width: 100%;
  z-index: -2;
  position: absolute;
}
.login-card {
  background-color: rgba(229, 239, 245, 0.783);
  border-radius: 50rpx;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: height 0.5s ease-out;
}
</style>
