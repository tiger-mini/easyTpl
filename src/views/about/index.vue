<template>
  <div>
    <h1>简介内容
    </h1>
    <div class="title font-semibold text-4xl text-purple-700 text">设置下文字大小</div>
    <div width='200Px' style="font-size: 16px">设置下文字大小 但是用的是style样式</div>
    <div class="titlePX">设置下文字大小 但是用的是PX</div>

    <div>金额：<span class="c-18 font-fed-sans">1,723,879.00</span>元</div>
    <Button type="primary" @click="go">查看我的页面</Button>
  </div>
</template>
<script>
import {Button} from "vant";
import {createNamespacedHelpers} from 'vuex'

const {mapActions} = createNamespacedHelpers('header');

export default {
  name: 'AboutPage',
  components: {Button},
  data() {
    return {}
  },
  mounted() {
    this.setTitle("关于");
    this.setRightTemp([{
      iconName: 'edit',
      fn: this.save
    }, {
      iconName: 'qr',
      isPopover: true,
      fn: this.qrClick
    }]);
  },
  methods: {
    go() {
      this.$router.push({name: 'me'})
    },
    save() {
      console.log('编辑操作')
    },
    qrClick() {
      console.log('二维码扫描')
    },
    ...mapActions(["setTitle", "setRightTemp"])
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 16px;
}

.titlePX {
  font-size: 16PX;
}
</style>
