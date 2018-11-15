<template>
    <div class="login">
        <div class="s-header-bg">
            <div class="s-logo"></div>
        </div>
        <div class="s-btn">
            <div class="s-btn-login" @click="login()">手机号登录</div>
            <div class="s-btn-register" @click="register()">注册</div>
        </div>
        <a class="s-try-out" href="#">游客试用</a>
        <div class="s-other-login">
            <div class="s-login-header">
                <span class="s-login-left s-bg"></span>
                <span class="s-login-title">其它登录方式</span>
                <span class="s-login-right s-bg"></span>
            </div>
            <ul class="s-login-list">
                <li class="s-login-item" v-for="item in items">
                    <img src="../../assets/img/bg.jpg">
                    <span class="s-text">{{item.text}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'

    export default {
        components: {

        },
        data () {
            return {
                items: [{
                    type: 'wx',
                    text: '微信',
                    url: '../../assets/img/bg.jpg'
                },{
                    type: 'qq',
                    text: 'QQ',
                    url: '../../assets/img/bg.jpg'
                },{
                    type: 'wb',
                    text: '微博',
                    url: '../../assets/img/bg.jpg'
                },{
                    type: 'wy',
                    text: '网易邮箱',
                    url: '../../assets/img/img.jpg'
                }],
		lists: []
            }
        },
        props: {

        },
        watch: {},
        methods: {
            login () {
                this.$router.push({
                    path: '../loginphone'
                })
            },
            register () {
                this.$router.push({
                    path: '../register'
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
    @import "../../assets/less/mixin.less";

    .login{
        .s-header-bg{
            width: 100%;
            height: 280px;
            padding-top: 100px;
            box-sizing: border-box;
            .s-logo{
                width: 94px;
                height: 94px;
                border-radius: 15px;
                background: #d8343b;
                margin: 0 auto;
            }
        }
        .s-btn{
            padding: 0 35px;
            .s-btn-login, .s-btn-register{
                display: block;
                height: 42px;
                margin-bottom: 15px;
                border: 1px solid #d8343b;
                color: #d8343b;
                text-align: center;
                line-height: 42px;
                border-radius: 21px;
            }
        }
        .s-try-out{
            text-decoration: underline;
            display: block;
            text-align: center;
            font-size: 12px;
            color: #b1b1b1;
        }
        .s-other-login {
            width: 100%;
            box-sizing: border-box;
            padding: 0 35px;
            position: fixed;
            bottom: 30px;
            .s-login-header {
                display: flex;
                padding: 22px 0;
                .s-bg {
                    flex: 1;
                    height: 1px;
                    align-items: center;
                }
                .s-login-left {
                    background: linear-gradient(to right, #fff, #eaeaea);
                }
                .s-login-right {
                    background: linear-gradient(to left, #fff, #eaeaea);
                }
                .s-login-title {
                     margin: 0 16px;
                     color: #5a5a5a;
                     font-size: 14px;
                }
            }
            .s-login-list {
                .s-login-item{
                    display: inline-block;
                    width: 25%;
                    text-align: center;
                    img{
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                    }
                    .s-text {
                        display: block;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>