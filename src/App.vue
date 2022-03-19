<template>
  <div id="app">
    <Header/>
    <div class="ykj-content-wrap" :class="getContentWrapClass">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  name: 'App',
  components: {Header, Footer},
  computed:{
    getContentWrapClass() {
      let className = '';
      if (!this.getIsMenu) {
        className += ' no-page-menu'
      }
      if (this.isHiddenHeader) {
        className += ` hidden-global-header`;
      }
      return className;
    },
    isHiddenHeader() {
      return this.$store.state.header.isHiddenGlobalHeader;
    },
    getIsMenu() {
      return this.$store.state.menu.isMenu;
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .ykj-content-wrap {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 50px);
    overflow-y: auto;
  }
  .ykj-content-wrap.no-page-menu {
    height: calc(100vh - 50px);
  }
  .ykj-content-wrap.no-page-menu.hidden-global-header {
    height: calc(100vh);
  }
  .ykj-content-wrap.hidden-global-header {
    overflow-y: hidden;
  }


}
</style>
