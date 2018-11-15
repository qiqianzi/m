<template>
    <ul class="musiclist">
        <li class="s-list" v-for="list in lists">
            <div class="s-list-detail">
                <div class="s-name">{{list.name}}</div>
                <div class="s-detail">
                    <i class="el-icon-circle-plus"></i>
                    {{list.name}}
                </div>
            </div>
            <i class="btn el-icon-circle-plus"></i>
            <i class="btn el-icon-more"></i>
        </li>
    </ul>
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

    .musiclist{
        .s-list{
            width: 100%;
            height: 50px;
            display: flex;
            .border-1px(#e4e8eb);
            .s-list-detail{
                -webkit-box-flex: 1;
                flex: 1;
                margin-left: 10px;
                padding: 6px 0;
                width: 1%;
                .s-name{
                    color: #303437;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: normal;
                    line-height: 20px;
                }
                .s-detail{
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: normal;
                    line-height: 18px;
                }
            }
            .btn{
                font-size: 22px;
                color: #a0a4a7;
                padding: 0 10px;
                line-height: 50px;
            }
        }
    }
</style>