<template>
    <div class="login">
        <div class="s-header">
            <i class="el-icon-back" @click="goBack()"></i>
            <span class="s-header-title">手机号登录</span>
        </div>
        <div class="s-content">
            <div class="s-content-phone s-content-input">
                <i class="el-icon-back"></i>
                <span>+86</span>
                <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" class="s-search-text" placeholder="请输入手机号" v-model.number.trim="message" ref="phone" @keyup="closestatus" v-on:blur="phone">
                <i class="close el-icon-close" v-show="closestate" @click="close"></i>
            </div>
            <div class="s-content-pass s-content-input">
                <i class="el-icon-back"></i>
                <input type="password" class="s-search-text" placeholder="请输入密码" ref="password" v-on:blur="phone">
                <span class="">忘记密码？</span>
            </div>
        </div>
        <div class="s-submit" @click="login">登录</div>
        <s-msg ref="tooltop"></s-msg>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'
    import msg       from '@/components/base/msg/msg'
    
    export default {
        components: {
            's-msg': msg
        },
        data () {
            return {
                closestate: false,
                message: '',
                value_phone: '',
                value_password: ''
            }
        },
        props: {

        },
        watch: {},
        methods: {
            goBack () {
                window.history.back()
            },
            closestatus () {
                let value = this.$refs.phone.value
                this.closestate = (value == '') ? false : true
            },
            phone () {
                this.value_phone = this.$refs.phone.value
                this.value_password = this.$refs.password.value
                console.log(this.value_phone,this.value_password)
            },
            close () {
                this.message = ''
            },
            login () {
                this.$refs.tooltop.tooltop = (this.value_phone == '' || this.value_password == '') ? true : false
                this.$refs.tooltop.message = (this.value_phone == '') ? '请输入手机号' : (this.value_password == '') ? '请输入密码' : (this.value_phone.length !== 11) ? '请输入11位数字的手机号' : ''
                setTimeout(() => {
                    this.$refs.tooltop.tooltop = false
                }, 1500);
                axios.get('http://localhost:3000/login/cellphone?phone='+this.value_phone+'&password='+this.value_password, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res,'bbbbbbbbbbbbbbbbb')
                        if (res.data.code == 200) {
                            this.$router.push({
                                path: '../index'
                            })
                        } else if (res.data.code == 502) {
                            this.$refs.tooltop.message = res.data.msg
                        } else if (res.data.code == 400) {
                            console.log(this.value_password)
                            if(this.value_phone !== '' && this.value_password !== ''){
                                this.$refs.tooltop.message = '用户名或密码错误'
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err)
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