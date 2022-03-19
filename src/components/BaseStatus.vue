<template>
    <span :class="'base-status ' + status">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'BaseStatus',
    props: {
        status: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="less">
.base-status {
    display: inline-block;
    padding: 0 12px;
    font-size: 24px;
    border-radius: 8px;
}

.green {
    background-color: rgba(230, 255, 240, 1);
    color: rgba(0, 191, 112, 1);
}

.red {
    background-color: rgba(242, 61, 61, 0.1);
    color: #f23d3d;
}
</style>
