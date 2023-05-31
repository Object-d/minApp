<template>
  <view class="history-list">
    <view class="history-list-item" v-for="item in props.options" :key="item.id">
      <view class="history-list-item-row row-flex">
        <view>
          <view class="history-list-item-label">访客姓名:</view> {{item.v_name}}
        </view>
        <view class="history-list-item-status">
          <nut-tag plain :type="status.list[item.status]">{{item.statusName}}</nut-tag>
        </view>
      </view>
      <view class="history-list-item-row">
        <view class="history-list-item-label">来访事由:</view> {{item.v_reason}}
      </view>
       <view class="history-list-item-row">
        <view class="history-list-item-label">预约来访时间:</view> {{item.v_timeStr}}
      </view>
    </view>
  </view>
</template>

<script setup>
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { onMounted, ref, reactive } from "vue";

const props = defineProps(['options']);
const status = reactive({
  list: [undefined, 'primary', 'success', 'danger', 'warning'],
});

</script>

<style lang="scss">
.history-list {
  &-item {
    padding: 13px 16px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    color: rgb(128, 128, 128);
    font-size: 16px;

    &-status {
      color: rgb(128, 128, 128);
    }
    
    &-label {
      color: #000;
      display: inline-block;
      margin-right: 5px;
    }
    &-status {
      margin-right: 10px;
    }
    &-row {
      color: #666;
      margin-top: 5px;
    }
    .row-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
