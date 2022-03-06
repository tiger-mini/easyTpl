<template>
  <div>
    <div>
      <div>名称：张三</div>
      <div>性别：男</div>
    </div>
    <br/>
    <br/>
    <van-button type="default" @click="goSetting">设置</van-button>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('header');

export default {
  name: 'MePage',
  props: {
    msg: String
  },
  mounted() {
    this.setTitle("我");
  },
  methods: {
    goSetting() {
      this.$router.push({name: 'setting'});
    },
    ...mapActions(['setTitle'])
  }
}
</script>

<style></style>