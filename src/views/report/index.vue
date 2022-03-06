<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item"/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const {mapActions} = createNamespacedHelpers('header');

export default {
  name: 'ReportPage',
  props: {
    msg: String
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  mounted() {
    this.setTitle("报表");
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    ...mapActions(['setTitle'])
  }
}
</script>

<style scoped lang="less">
.report-list-wrap {
  overflow-y: auto;
}
</style>