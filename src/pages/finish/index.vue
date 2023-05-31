<template>
  <view class="qrcode">
    <view class="success">预约成功</view>
    <view class="appointmentCode">预约码: {{ data.appointmentCode }}</view>
    <view class="tip">您的预约二维码如下，请截图保存，到达园区岗亭进行访客登记后即可进入园区，祝您来访愉快</view>
    <view ref="eleBox" class="canvas"></view>
    <button class="btn" size="mini" type="default" :plain="true" @click="onEnter">返回首页</button>
  </view>
</template>

<script setup>
import Taro, { getCurrentInstance } from "@tarojs/taro";
import QRCode from 'qrcodejs2'
import { nextTick, ref, reactive } from "vue";
const eleBox = ref()
const data = reactive({
  appointmentCode: '',
})

nextTick(() => {
  const queryParams = getCurrentInstance()?.router?.params?.item // 获取 URL 查询参数
  const item = queryParams ? JSON.parse(decodeURIComponent(queryParams)) : {}
  console.log(item);
  data.appointmentCode = item.appointmentCode
  const qrcode = new QRCode(eleBox.value, {
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.L,
    	text: item.v_barCode,
  })
});


function onEnter() {
  Taro.navigateBack({
    url: `/pages/index/index`,
  });
}


</script>

<style lang="scss">
.qrcode {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 15vh;
  .finish {
    color: #2196f3;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    top: -20px;
  }
  .btn {
    margin-top: 20px;
  }

  .appointmentCode {
    margin: 10px 0;
    font-size: 20px;
    color: #171717;
  }

  .success {
    font-size: 22px;
    color: #3276fc;
  }

  .h5-table {
    display: inline-flex;
  }

  .tip {
    color: #929292;
    width: 76vw;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
