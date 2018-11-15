<template>
    <div class="login">
        <div class="s-header">
            <i class="el-icon-back" @click="goBack()"></i>
            <span class="s-header-title">手机号注册</span>
        </div>
        <div class="s-content">
            <div class="s-content-phone s-content-input">
                <i class="el-icon-back"></i>
                <span>+86</span>
                <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" class="s-search-text" v-model="msgphone" placeholder="请输入手机号">
                <i class="close el-icon-close" v-show="closephone" @click="closePhone"></i>
            </div>
            <div class="s-content-pass s-content-input">
                <i class="el-icon-back"></i>
                <input type="password" class="s-search-text" v-model="msgpass" placeholder="设置登录密码，不少于6位">
                <i class="close el-icon-close" v-show="closepass" @click="closePass"></i>
            </div>
        </div>
        <div class="s-submit">下一步</div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'
    
    export default {
        components: {
            
        },
        data () {
            return {
                closephone: false,
                closepass: false,
                msgphone: '',
                msgpass: '',
		lists: []
            }
        },
        props: {

        },
        watch: {},
        methods: {
            goBack () {
                window.history.back()
            },
            closePhone () {
                this.msgphone = ''
            },
            closePass () {
                this.msgpass = ''
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

    @color: #303131;

    .login {
        .s-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            background: #df4239;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            i {
                font-size: 16px;
                color: #fff;
                padding: 0 15px;
            }
            .s-header-title {
                font-size: 16px;
                color: #fff;
                flex: 1;
            }
        }
        .s-content {
            margin-top: 50px;
            padding: 25px 15px 0;
            .s-content-input {
                display: flex;
                align-items: center;
                height: 36px;
                margin-bottom: 20px;
                .border-1px(#e4e8eb);
                .s-search-text {
                    flex: 1;
                    border: 0;
                    height: 100%;
                    outline: none;
                    caret-color: #df4239;
                }
            }
            .s-content-phone {
                span{
                    color: #bbbfc2;
                    font-size: 14px;
                }
                input::-webkit-input-placeholder {
                    color: #bbbfc2;
                    font-size: 14px;
                }
            }
            .s-content-pass {
                input::-webkit-input-placeholder {
                    color: #bbbfc2;
                    font-size: 14px;
                }
                span {
                    color: #507daf;
                    font-size: 14px;
                }
            }
        }
        .s-submit {
            margin: 30px 15px 0;
            height: 42px;
            border: 1px solid #d8343b;
            text-align: center;
            line-height: 42px;
            border-radius: 21px;
            color: #fff;
            background: linear-gradient(to right, #ff504e, #cc3637);
        }
    }
</style>