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
            <van-cell-group inset :style="{ 'opacity': opacity, 'width': '100%' }" class="form">
              <!-- <input type="text" placeholder="学号" :style="{ 'width': '100%' }" /> -->
              <van-field
                label="学号"
                required
                clearable
                :border="true"
                @change="form.stuid = $event.detail"
              />
              <van-field
                name="password"
                label="密码"
                required
                clearable
                :border="true"
                password
                @change="form.password = $event.detail"
              />
            </van-cell-group>
            <van-button
              type="info"
              round
              size="large"
              block
              :style="{
                'width': '80%',
                'opacity': opacity,
                'margin-bottom': '40rpx'
              }"
              @click="login"
            >登录</van-button>
            <view :style="{ 'color': 'red' }">左滑注册</view>
          </view>
        </swiper-item>

        <swiper-item>
          <view class="login-part">
            <view class="header">注 册</view>
            <van-cell-group inset :style="{ 'opacity': opacity, 'width': '100%' }" class="form">
              <van-field
                label="姓名"
                required
                clearable
                :border="true"
                @change="form.name = $event.detail"
              />
              <van-field
                label="学号"
                required
                clearable
                :border="true"
                @change="form.stuid = $event.detail"
              />
              <van-field
                name="password"
                label="密码"
                required
                clearable
                :border="true"
                password
                @change="form.password = $event.detail"
              />
              <van-field
                name="password"
                label="密码"
                placeholder="请再次输入密码"
                required
                clearable
                :border="true"
                password
                @change="form.passwordAgain = $event.detail"
              />
            </van-cell-group>
            <van-button
              type="info"
              round
              size="large"
              block
              :style="{
                'width': '80%',
                'opacity': opacity,
                'margin-bottom': '40rpx'
              }"
              @click="register"
            >注册</van-button>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <van-toast id="van-toast" />
  </view>
</template>

<script setup>
import Toast from '../../wxcomponents/vant/toast/toast';
import { computed, reactive } from "vue";
import user from "../../api/user";
import { useScrollUp } from "../../hook/useScrollUp";

const { scrolledUp, detectMove, detectStart } = useScrollUp();

const form = reactive({
  stuid: "",
  password: "",
  passwordAgain: "",
  name: ""
});

const cardHeight = computed(() => {
  return scrolledUp.value ? "50%" : "20%";
});
const brightness = computed(() => {
  return `brightness(${scrolledUp.value ? '0.3' : '1'})`;
});
const opacity = computed(() => {
  return scrolledUp.value ? "1" : "0";
});

async function login() {
  try {
    const result = await user.login(form.stuid, form.password);
    if (result.statusCode !== 200) {
      throw `服务器或网络错误`;
    }
    if (!result.data.success) {
      throw `${result.data.error}`;
    }
    await uni.navigateTo({
      url: "/pages/main/main"
    });
  } catch (e) {
    console.log(e);
    Toast.fail(`错误： ${e}`);
  }
}

async function register() {
  try {
    const result = await user.register(form.name, form.stuid, form.password);
    if (result.statusCode !== 200) {
      throw `服务器或网络错误`;
    }
    if (!result.data.success) {
      throw `${result.data.error}`;
    }
    uni.navigateTo({
      url: "/pages/main/main"
    });
  } catch (e) {
    Toast.fail(`错误： ${e}`)
  }
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
  align-items: center;
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
    margin-bottom: 40rpx;
    margin-top: 30rpx;
  }

  .form {
    transition: opacity 0.5s ease-in-out;
    margin-bottom: 40rpx;
  }
}
</style>
