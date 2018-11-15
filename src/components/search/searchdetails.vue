<template>
    <div class="search">
        <s-search @search="search"></s-search>

        <div class="s-music-details">
            <div class="s-mv-details"></div>
            <div class="s-list-details">
                <s-musiclist v-for="list in lists"></s-musiclist>
            </div>
        </div>

        <s-tabbar></s-tabbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios        from 'axios'
    import search       from '@/components/base/search/search'
    import tabbar       from '@/components/base/tabbar/tabbar'
    import musiclist     from '@/components/base/musiclist/musiclist'

    export default {
        components: {
            's-search': search,
            's-tabbar': tabbar,
            's-musiclist': musiclist
        },
        data () {
            return {
                lists: [],
            }
        },
        props: {

        },
        watch: {},
        methods: {
            // 子组件传递的数据
            search(...data){
                this.items = data[0];
            }
        },
        filters: {},
        computed: {

        },
        created () {

        },
        mounted () {

        },
        destroyed () {}
    }
</script>
<style lang="less" scoped>
    @import "../../assets/less/mixin.less";

</style>