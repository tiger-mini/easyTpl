<template>
  <nav-bar v-show="!header.isHiddenGlobalHeader" :title="header.title" left-arrow left-text="返回">
    <template #left>
      <icon v-show="!menu.isMenu" name="arrow-left" @click="goBack"/>
    </template>
    <template #right>
      <div class="qr-class" />
      <template v-for="item in header.rightTemp">
        <icon :key="item.iconName" :name="item.iconName" size="18" class="right-op-icon" :class="item.className || ''" @click="item.fn"/>
      </template>
    </template>
  </nav-bar>
</template>

<script>
import { Icon,NavBar } from 'vant';
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers(['header', 'menu']);

export default {
  name: "HeaderComponent",
  components: {NavBar, Icon},
  data() {
    return {
      isMenu: this.isMenu
    }
  },
  computed: {
    ...mapState({
      isMenu: state => this.isMenu = state.menu.isMenu
    }),
    ...mapState({
      title: state => state.header.title,
      active: state => state.menu.active
    }),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};

</script>

<style scoped lang="less">
.van-nav-bar__right {
  .right-op-icon {
    margin-right: 4px;
    padding: 0 6px;
  }

  .right-op-icon:last-child {
    margin-right: 0;
  }
}

</style>
