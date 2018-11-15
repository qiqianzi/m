<template>
    <div class="mvlist">
        <div class="s-avatar">
            <img class="s-pic" :src="artist.picUrl">
        </div>
        <div class="s-describe">
            <h4>歌手:<span class="s-name">{{artist.name}}</span><span v-if="artist.alias && artist.alias.length">({{artist.alias[0]}})</span></h4>
        </div>
        <i class="btn el-icon-arrow-right"></i>
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
            artist: {
                type: Object,
                default: ''
            }
        },
        watch: {},
        methods: {

        },
        filters: {},
        computed: {},
        created () {
            //console.log(this,333)
        },
        mounted () {},
        destroyed () {}
    }
</script>

<style lang="less" scoped>
    @import "../../../assets/less/mixin.less";

    .mvlist{
        display: flex;
        width: 100%;
        height: 50px;
        padding: 8px 10px;
        box-sizing: border-box;
        align-items: center;
        .border-1px(#e4e8eb);
        .s-avatar{
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 0;
            flex: 0 0 auto;
            img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 6px;
            }
        }
        .s-describe{
            flex: 1;
            display: inline-block;
            width: 1%;
            h4{
                font-size: 16px;
                color: #333333;
                line-height: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: normal;
            }
            .s-name{
                color: #507daf;
            }
        }
        .btn{
            margin: 0 8px;
            font-size: 16px;
            color: rgb(51, 51, 51);
        }
    }
</style>