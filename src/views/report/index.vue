<template>
    <div>
        <pull-refresh v-model="refreshing" @refresh="onRefresh">
            <list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <cell v-for="item in list" :key="item" :title="item" />
            </list>
        </pull-refresh>
    </div>
</template>

<script>
import { Cell, List, PullRefresh } from 'vant';

export default {
    name: 'ReportPage',
    components: { PullRefresh, List, Cell },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    mounted() {},
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 20; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 100) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
};
</script>

<style scoped lang="less">
.report-list-wrap {
    overflow-y: auto;
}
</style>
