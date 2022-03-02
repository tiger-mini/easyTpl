<template>
  <div>
    <div>about</div>

    <h1>简介内容
    </h1>
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