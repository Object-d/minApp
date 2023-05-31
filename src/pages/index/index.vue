<template>
  <view class="index">
    <img :src="loginSvg">
    <button class="btn-max-w btn" type="primary" @click="onEnter">申请入园</button>
    <view class="btn-history" type="text" @click="onEnterHistory">预约历史</view>
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";

const loginSvg = require('./../../assets/login.svg');

function onEnter() {
  Taro.navigateTo({
    url: `/pages/apply_detail/index`,
  });
}

function onEnterHistory() {
  Taro.navigateTo({
    url: `/pages/history/index`,
  });
}

</script>

<style lang="scss">
.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 15vh;
  .btn {
    width: 70%;
    background-color: #2196f3;
  }

  .btn-history {
    position: absolute;
    bottom: 50px;
    display: inline-block;
    left: 50%;
    color: #2196f3;
    font-size: 16px;
    font-weight: bold;
    transform: translateX(-50%);
  }
}
</style>
