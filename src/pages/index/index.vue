<template>
  <view class="index">
    <img :src="loginSvg" />
    <button
      :disabled="!agree"
      class="btn-max-w btn"
      type="primary"
      @click="onEnter"
    >
      申请入园
    </button>
    <view class="index-agree">
      <nut-checkbox v-model="state.agree" label="本人已阅读并同意">
        本人已阅读并同意 <view class="index-privacy" @click="openUser">《用户隐私政策》</view>
      </nut-checkbox>
    </view>
    <view class="btn-history" type="text" @click="onEnterHistory"
      >预约历史</view
    >
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { computed, onMounted, reactive, ref } from "vue";

const loginSvg = require("./../../assets/login.svg");

const state = reactive({
  agree: false,
});

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

function openUser(e) {
  e.stopPropagation();
  Taro.downloadFile({
    url: "../../assets/privacy-policy.docx",
    success: (res) => {
      const filePath = res.tempFilePath;
      Taro.openDocument({
        filePath: filePath,
        fileType: "docx",
        success: () => {
          console.log("打开文档成功");
        },
        fail: () => {
          console.log("打开文档失败");
        },
      });
    },
    fail: () => {
      console.log("下载文件失败");
    },
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

  &-agree {
    transform: scale(0.8);
    font-size: 12px;
    margin-top: 20px;
  }

  &-privacy {
    display: inline;
    color: #2196f3;
  }

  button.btn[disabled][type="primary"] {
    opacity: 0.5;
    background-color: #2196f3;
    cursor: not-allowed;
  }
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
