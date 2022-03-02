<template>
  <div>
    <div>报表页面</div>

    <h1>报表内容
    </h1>
    <div>财务报表</div>
    <div>招商报表</div>

    <button @click="go">查看我的页面</button>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods: {
    go() {
      this.$router.push({ name: 'me'})
    }
  }
}
</script>

<style></style>