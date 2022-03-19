<template>
  <div>
    <div>
      <div>名称：张三</div>
      <div>性别：男</div>
    </div>
    <br/>
    <br/>
    <Button type="primary" @click="goSetting">设置</Button>
  </div>
</template>
<script>
import { Button } from 'vant';
import {createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('header');

export default {
  name: 'MePage',
  components: {Button},
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
