<template>
    <div class="sidebar" id="sidebar">
        <div class="s-sidebar-box">
            <div class="s-sidebar-header">
                <div class="s-sidebar-header-bg">
                    <p>登录网易云音乐</p>
                    <p>320K高音质无限下载，手机电脑多端同步</p>
                    <div class="btn" @click="login">立即登录</div>
                    <!--<div class="s-avatar">
                        <img src="../../../assets/img/bg.jpg">
                    </div>
                    <div class="s-information">
                        <div class="s-account-name">mylove</div>
                        <div class="s-account-grade">LV5</div>
                        <div class="s-sign-in">
                            <i class="el-icon-circle-plus"></i>签到
                        </div>
                    </div>-->
                </div>
            </div>
            <s-sidebarlist :lists="sidebarListData"></s-sidebarlist>
            <div class="s-sidebar-tabbar">
                <div class="s-mode">
                    <i class="el-icon-time"></i>
                    <span>夜间模式</span>
                </div>
                <div class="s-setting">
                    <i class="el-icon-setting"></i>
                    <span>设置</span>
                </div>
                <div class="s-drop-out">
                    <i class="el-icon-circle-close-outline"></i>
                    <span>退出</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'
    import sidebarlist    from '@/components/base/sidebarlist/sidebarlist'

    export default {
        components: {
            's-sidebarlist': sidebarlist
        },
        data () {
            return {
                sidebarListData: [{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '我的消息'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: 'VIP会员'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '商城'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '在线听歌免流量'
                },{
                    display: false,
                    i: '',
                    text: ''
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '我的好友'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '附近的人'
                },{
                    display: false,
                    i: '',
                    text: ''
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '个性换肤'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '听歌识曲'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '定时停止播放'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '扫一扫'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '音乐闹钟'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '驾驶模式'
                },{
                    display: true,
                    i: 'el-icon-circle-plus',
                    text: '优惠券'
                }]
            }
        },
        props: {

        },
        watch: {},
        methods: {
            login () {
                this.$router.push({
                    path: '../login'
                })
            }
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

    .sidebar{
        position: fixed;
        transform: translateZ(0);
        height: 100%;
        width: 86%;
        /*overflow: auto;*/
        left: -86%;
        top: 0;
        bottom: 0;
        z-index: 1000;
        background: #fff;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
        .s-sidebar-box{
            height: 100%;
            overflow: auto;
            .s-sidebar-header{
                overflow: hidden;
                .s-sidebar-header-bg{
                    width: 100%;
                    height: 150px;
                    padding: 40px 10px 0;
                    box-sizing: border-box;
                    text-align: center;
                    background-image: url("../../../assets/img/bg.jpg");
                    .s-avatar{
                        width: 64px;
                        height: 64px;
                        img{
                            width: 100%;
                            border-radius: 50%;
                        }
                    }
                    .s-information{
                        display: flex;
                        height: 36px;
                        margin: 5px 0;
                        line-height: 36px;
                        color: #fff;
                        font-size: 12px;
                        .s-account-name{
                            margin-right: 8px;
                        }
                        .s-account-grade{
                            height: 16px;
                            border: 1px solid #fff;
                            padding: 0 10px;
                            border-radius: 8px;
                        }
                        .s-sign-in{
                            font-size: 16px;
                            height: 16px;
                            border: 1px solid #fff;
                            padding: 5px 15px;
                            border-radius: 13px;
                        }
                    }
                    p{
                        height: 16px;
                        line-height: 16px;
                        font-size: 14px;
                        text-align: center;
                        margin-bottom: 10px;
                        color: #fff;
                        opacity: .5;
                    }
                    .btn{
                        width: 40%;
                        height: 30px;
                        line-height: 30px;
                        margin: 16px auto;
                        border-radius: 15px;
                        text-align: center;
                        color: #fff;
                        border: 1px solid #fff;
                    }
                }
            }
            .s-sidebar-tabbar{
                position: fixed;
                display: flex;
                padding-left: 10px;
                line-height: 50px;
                z-index: 1001;
                background: #fff;
                left: 0;
                right: 0;
                bottom: 0;
                height: 50px;
                .border-2px(#e4e8eb);
                .s-mode{
                    flex: 1;
                    i{
                        font-size: 18px;
                        margin-right: 5px;
                    }
                }
                .s-setting{
                    flex: 1;
                    i{
                        font-size: 18px;
                        margin-right: 5px;
                    }
                }
                .s-drop-out{
                    flex: 1;
                    i{
                        font-size: 18px;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>