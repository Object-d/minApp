<template>
  <view class="qrcode">
    <nut-icon class="qrcode-icon" name="success"></nut-icon>
    <view class="success">
      <view>预约审核中</view>
      <view>预约结果请在预约历史中查询</view>
    </view>
    <view class="appointmentCode">预约码: {{ data.appointmentCode }}</view>
    <view class="addr">地址：江苏省常熟市东南街道新安江路68号  江苏正力新能电池技术有限公司—南2门</view>
    <view ref="eleBox" class="canvas"></view>
    <view class="tip">您的预约二维码如下，请截图保存，到达园区岗亭进行访客登记后即可进入园区，祝您来访愉快</view>
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
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px;

  &-icon {
    color: #f3812e;
    font-size: 40px;
    margin-bottom: 20px;
  }

  .finish {
    color: #03A678;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    top: -20px;
  }
  .btn {
    margin-top: 20px;
  }

  .appointmentCode {
    margin: 5px 0;
    font-size: 20px;
    color: #171717;
  }

  .success {
    text-align: center;
    font-size: 22px;
    color: #f3812e;
    margin-bottom: 30px;
  }

  .h5-table {
    display: inline-flex;
  }

  .tip {
    color: #929292;
    width: 76vw;
    font-size: 12px;
    text-align: center;
    margin-bottom: 5px;
  }

  .addr {
    width: 81vw;
    color: #333;
    margin-bottom: 10px;
  }
}
</style>
