<template>
    <div>
        <div>
            <div>名称：张三</div>
            <div>性别：男</div>
        </div>
        <br />
        <br />
        <Button type="primary" @click="goSetting">设置</Button>
    </div>
</template>
<script>
import { Button } from 'vant';

export default {
    name: 'MePage',
    components: { Button },
    props: {
        msg: String,
    },
    mounted() {},
    methods: {
        goSetting() {
            this.$router.push({ path: '/setting' });
        },
    },
};
</script>

<style></style>
