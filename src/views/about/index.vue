<template>
  <div>
    <h1>简介内容
    </h1>
    <van-button type="default" @click="go">查看我的页面</van-button>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const { mapActions } = createNamespacedHelpers('header');

export default {
  name: 'AboutPage',
  data() {
    return {

    }
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

<style></style>