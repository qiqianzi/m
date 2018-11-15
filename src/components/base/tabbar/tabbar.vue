<template>
    <div class="tabbar">
        <div class="image" @click="play">
            <img src="../../../assets/img/img.jpg">
        </div>
        <div class="detail" @click="play">
            <p class="name">{{musicName}}</p>
            <p class="title">{{musicTitle}}</p>
        </div>
        <div class="btn">
            <i class="play el-icon-circle-plus" @click="switching"></i>
            <i class="unfold el-icon-circle-plus" @click="unfold"></i>
        </div>
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
            name: {
                type: String,
                default: '追光者 电视剧《夏至未至》插曲'
            },
            title: {
                type: String,
                default: '横划可以切换上下首哦'
            },
        },
        watch: {},
        methods: {
            play () {
                console.log('play')
            },
            switching () {
                console.log('switch')
            },
            unfold () {
                console.log('unfold')
            },
        },
        filters: {},
        computed: {},
        created () {
            this.musicName = this.name;
            this.musicTitle = this.title;
        },
        mounted () {},
        destroyed () {}
    }
</script>
<style lang="less" scoped>
    @import "../../../assets/less/mixin.less";
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        .border-2px(#f6f6f6);
        .image{
            padding: 9px;
        }
        .detail{
            padding: 9px 9px 9px 0;
            .name{
                font-size: 14px;
                color: #383838;
                padding: 1px 0;
            }
            .title{
                font-size: 12px;
                color: #747474;
                padding: 3px 0;
            }
        }
        .btn{
            position: absolute;
            right: 0;
            font-size: 26px;
            color: #4b4b4b;
            padding: 0 12px;
            line-height: 50px;
        }
    }
</style>