/* * @Author: zhanxuwen * @Date: 2022/3/15 21:29 * @LastEditors: zhanxuwen * @LastEditTime: 2022/3/15 21:29 *
@Description: 折叠显示总数 */
<template>
    <span class="flex">
        <span class="w-0 flex-1 c-ellipsis">{{ resource.join(',') }}</span>
        <span v-if="resource.length > 0">等{{ resource.length }}个</span>
    </span>
</template>

<script>
export default {
    name: 'BaseEllipsisShowTotal',
    props: {
        resource: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped lang="less"></style>
