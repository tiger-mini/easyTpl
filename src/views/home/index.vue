<template>
  <div>
    <h1>子应用通用脚手架页面</h1>
    <button @click="go('me')" class="btn">查看我的页面</button><br/><br/>
    <button @click="go('about')" class="btn">查看关于页面</button><br/><br/>
    <button @click="go('report')" class="btn">查看报表页面</button>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods: {
    go(name) {
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  height: 34px;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  user-select: none;
  touch-action: manipulation;
  padding: 4px 15px;
  font-size: 14px;
  color: #000000d9;
  background: #fff;
}
</style>