<template>
    <div class="sidebar-list">
        <ul>
            <li v-for="list in lists" :class="list.display ? 'normal' : 'bg'">
                <i :class="list.i"></i>
                <span class="s-list-name">{{list.text}}</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        components: {

        },
        data () {
            return {

            }
        },
        props: {
            lists: {
                type: Array,
                default: ''
            }
        },
        watch: {},
        methods: {

        },
        filters: {},
        computed: {},
        created () {

        },
        mounted () {},
        destroyed () {}
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/less/mixin.less";

    .sidebar-list{
        display: block;
        ul{
            .normal{
                height: 48px;
                line-height: 48px;
                padding-left: 10px;
                box-sizing: border-box;
                i{
                    color: #919191;
                    font-size: 14px;
                    margin-right: 10px;
                }
                .s-list-name{
                    color: #292929;
                }
            }
            .bg{
                height: 10px;
                background: #f3f3f3;
            }
        }
    }
</style>