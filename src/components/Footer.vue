<template>
  <van-tabbar v-model="getActive" @change="onChange" v-show="getIsMenu">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o">报表</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const { mapActions } = createNamespacedHelpers('menu');

export default {
  data() {
    return {

    }
  },
  computed:{
    getActive: {
      get: function() {
        return this.$store.state.menu.active;
      },
      set: function(newValue) {

      }
    },
    getIsMenu() {
      return this.$store.state.menu.isMenu;
    }
  },
  methods: {
    onChange(index) {
      this.setActive(index);
      let name = 'home';
      switch (index) {
        case 0:
          name = 'home';
          break;
        case 1:
          name = 'report';
          break;
        case 2:
          name = 'me';
          break;
        case 3:
          name = 'about';
          break;
      }
      this.$router.push({name});
    },
    ...mapActions(["setActive"])
  },
};
</script>
<style scoped>
.footer-navigate {

}
</style>