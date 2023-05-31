<template>
  <view class="history">
    <view class="search-sticky">
      <nut-searchbar
        v-model="state.searchValue"
        v-on:search="onSearch"
        placeholder="请输入手机号搜索"
      >
        <template v-slot:leftin>
          <nut-icon size="14" name="search2"></nut-icon>
        </template>
      </nut-searchbar>
    </view>

    <history-list :options="listState.options" />
  </view>
</template>

<script setup>
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { ref, reactive } from "vue";
import request from "../../utils/request";
import HistoryList from "./history-list.vue";

const listState = reactive({
  options: [],
});

const state = reactive({
  searchValue: "",
});

const onSearch = async () => {
  if (/^1[3|4|5|7|8|9][0-9]{9}$/.test(state.searchValue)) {
    const res = await request.post(
      "/evo-apigw/evo-visitor/1.0.0/card/visitor/getVisitorData",
      {
        pageSize: 100,
        pageNum: 1,
        v_phone: state.searchValue,
      }
    );
    listState.options = res?.data?.pageData || [];
  } else {
    Taro.showToast({
      title: '请输入合法的手机号',
      icon: 'none',
      duration: 1000,
    });
    listState.options = [];
  }
};
</script>

<style lang="scss">
.history {
  .search-sticky {
    position: sticky;
    top: 0;
  }
}
</style>
