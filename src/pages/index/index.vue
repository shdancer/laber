<template>
  <view class="main">
    <image src="../../static/theme.jpeg" mode="widthFix" :style="{ 'filter': brightness }" />
    <view
      class="login-card"
      @touchmove="detectMove"
      @touchstart="detectStart"
      :style="{ 'height': cardHeight }"
    >
      <swiper :style="{ 'width': '100%', 'height': '100%' }">
        <swiper-item>
          <view class="login-part">
            <view class="header">实 验 室</view>
            <view class="form">
              <vant-cell-group class="group">
                <input type="text" placeholder="学号" :style="{ 'width': '100%' }" />
                <!-- <vant-field placeholder="请输入学号" :border="true" /> -->
              </vant-cell-group>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view>注册</view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useScrollUp } from "../../hook/useScrollUp";
import { navigateTo } from "../../utils/navigateTo";

const { scrolledUp, detectMove, detectStart } = useScrollUp();

const cardHeight = computed(() => {
  return scrolledUp.value ? "80%" : "20%";
});
const brightness = computed(() => {
  return `brightness(${scrolledUp.value ? '0.3' : '1'})`;
});

async function nav() {
  await navigateTo("/pages/second/second");
}

</script>

<style scoped lang="scss">
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
  display: flex;
  padding: 30rpx;
  box-sizing: border-box;
}
.login-part {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #5389c2;
    font-size: 60rpx;
    font-weight: lighter;
    font-family: "微软雅黑";
    word-spacing: 20rpx;
  }

  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    .group {
      width: 80%;
      height: 100%;
      position: relative;

      .fxxk {
        width: 100%;
        height: 30rpx;
      }
    }
  }
}
</style>
