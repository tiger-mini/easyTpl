<template>
  <div>
    <div>
      个人中心
    </div>
    <div>
      <div>名称：张三</div>
      <div>性别：男</div>
    </div>
    <br/>
    <br/>
    <router-link to="/">返回主页</router-link>
  </div>
</template>
<script>
export default {
  name: 'MePage',
  props: {
    msg: String
  }
}
</script>

<style></style>