<template>
    <div class="setting-page-wrap">
        <nav-bar title="设置" left-arrow @click-left="goBack">
            <template #right>
                <icon name="user-o" size="18" />
                <popover
                    v-model="showPopover"
                    trigger="click"
                    :actions="actions"
                    placement="bottom-end"
                    @select="onSelect"
                >
                    <template #reference>
                        <icon name="more-o" size="18" />
                    </template>
                </popover>
            </template>
        </nav-bar>
        <div class="content-wrap">
            <div class="content">
                个人设置页面<br />
                明源云，是国内领先的不动产生态链数字化解决方案服务商，香港联交所主板上市（0909.HK），秉承“深耕数字科技，引领产业升级”的企业使命，坚持助客户成功的经营理念，明源云累计为7000多家不动产开发运营企业提供了数字化解决方案和产品。
                面向国有企业，明源云聚焦于企业的“经、投、建、管、营“全方位的数字化解决方案，通过数字科技助力国企深化改革以及数字化转型，实现高质量发展的长远目标。
                目前明源云服务的国企客户超过一千余家，已成为国企在“战略规划，流程体系建设，数字化解决方案领域”的首选合作伙伴。
                明源云，是国内领先的不动产生态链数字化解决方案服务商，香港联交所主板上市（0909.HK），秉承“深耕数字科技，引领产业升级”的企业使命，坚持助客户成功的经营理念，明源云累计为7000多家不动产开发运营企业提供了数字化解决方案和产品。
                面向国有企业，明源云聚焦于企业的“经、投、建、管、营“全方位的数字化解决方案，通过数字科技助力国企深化改革以及数字化转型，实现高质量发展的长远目标。
                目前明源云服务的国企客户超过一千余家，已成为国企在“战略规划，流程体系建设，数字化解决方案领域”的首选合作伙伴。
                明源云，是国内领先的不动产生态链数字化解决方案服务商，香港联交所主板上市（0909.HK），秉承“深耕数字科技，引领产业升级”的企业使命，坚持助客户成功的经营理念，明源云累计为7000多家不动产开发运营企业提供了数字化解决方案和产品。
                面向国有企业，明源云聚焦于企业的“经、投、建、管、营“全方位的数字化解决方案，通过数字科技助力国企深化改革以及数字化转型，实现高质量发展的长远目标。
                目前明源云服务的国企客户超过一千余家，已成为国企在“战略规划，流程体系建设，数字化解决方案领域”的首选合作伙伴。
                明源云还搭建了地产界的智能商业研究与学习平台——明源地产研究院，成立于2009年，现已成长为国内知名的专业地产研究机构。研究院汇聚了一大批精通地产管理理论和方法，兼备丰富行业实战经验的专家。通过对地产企业客户的深入研究和积淀，推动管理创新，持续提升房地产行业整体管理水平。知识来自行业，知识服务行业。明源地产研究院已经成为地产行业的知识平台、学习平台。每年出版多本智慧地产实战书籍和研究报告
                明源云把“开放、共赢”作为企业发展的重要基石。全面整合产业资源与生态能力，提供一站式解决方案。与腾讯微信、阿里云形成战略合作。为适应互联网和地产行业正在发生的革命性变化，明源云围绕客户需求和技术领先持续创新，与B2B互联网领域十余家领先公司开放合作，聚焦构筑面向未来的智能商业服务生态圈，持续为用户和全社会创造价值。
                ======
            </div>
        </div>
    </div>
</template>
<script>
import { Icon, NavBar, Popover } from 'vant';
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('header');

export default {
    name: 'SettingPage',
    components: { NavBar, Popover, Icon },
    data() {
        return {
            showPopover: false,
            actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
        };
    },
    mounted() {
        this.setHiddenGlobalHeader(true);
        this.setRightTemp([
            {
                iconName: 'edit',
                fn: this.save,
            },
            {
                iconName: 'qr',
                isPopover: true,
                fn: this.qrClick,
            },
        ]);
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        save() {
            console.log('编辑操作');
        },
        qrClick() {
            console.log('二维码扫描');
        },
        onSelect(item, index) {
            console.log('item', item, index);
        },
        ...mapActions(['setTitle', 'setRightTemp', 'setHiddenGlobalHeader']),
    },
};
</script>
<style lang="less" scoped>
.setting-page-wrap {
    overflow-y: hidden;
    height: calc(100vh);

    .content-wrap {
        height: calc(100vh - 46px);
        overflow-y: auto;
        .content {
            //height: calc(100vh - 46px);
        }
    }
}
</style>
