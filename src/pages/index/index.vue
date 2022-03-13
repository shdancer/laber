<template>
  <view class="main">
    <image src="../../static/theme.jpeg" mode="widthFix" :style="{ 'filter': brightness }" />
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
  return scrolledUp.value ? "80%" : "20%";
});
const brightness = computed(() => {
  return `brightness(${scrolledUp.value ? '0.3' : '1'})`;
});

</script>

<style>
.main {
  overflow: hidden;
  position: relative;
  height: 100vh;
}
image {
  width: 100%;
  z-index: -1;
  position: absolute;
  transition: filter 0.5s ease;
}
.login-card {
  background-color: rgba(216, 216, 216, 0.845);
  border-radius: 50rpx;
  box-shadow: 0px -5px 30px #535d60;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: height 0.5s ease-out;
}
</style>
