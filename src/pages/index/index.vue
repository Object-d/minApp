<template>
  <view class="index">
    <view class="index-login">
      <button
        :disabled="!state.agree"
        class="btn-max-w btn"
        ghost
        @click="onEnter"
      >
        申请入园
      </button>
      <view class="index-agree">
        <nut-checkbox v-model="state.agree" label="本人已阅读并同意">
          本人已阅读并同意
          <view class="index-privacy" @click="openUserPolicy">《用户协议》</view
          >、
          <view class="index-privacy" @click="openUser">《隐私政策》</view>
        </nut-checkbox>
      </view>
      <view class="btn-history" type="text" @click="onEnterHistory"
        >预约历史</view
      >
    </view>
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { computed, onMounted, reactive, ref } from "vue";

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
  Taro.navigateTo({
    url: `/pages/policy/index`,
  });
}

function openUserPolicy(e) {
  e.stopPropagation();
  Taro.navigateTo({
    url: `/pages/user_policy/index`,
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
  background-image: url("../../assets/login.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &-login {
    margin-top: 45vh;
  }

  .nut-checkbox__icon {
    color: #fff;
  }
  &-agree {
    transform: scale(0.8);
    font-size: 12px;
    margin-top: 16px;

    .nut-checkbox__label {
      color: #fff;
    }
  }

  &-privacy {
    display: inline;
    color: #fff;
  }

  button.btn[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: transparent;
    border: 1px solid #eee;
    color: #eee;
  }
  .btn {
    width: 70%;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 2px;
  }

  .btn-history {
    position: absolute;
    bottom: 40px;
    display: inline-block;
    left: 50%;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    transform: translateX(-50%);
  }
}
</style>
