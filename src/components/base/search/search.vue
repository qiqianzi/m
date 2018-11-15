<template>
    <div class="search">
        <div class="s-search">
            <div class="s-inputcover">
                <i class="back el-icon-back" @click="goBack"></i>
                <input class="s-search-text" placeholder="猜你喜欢我们" id="s-search-text" ref="searchval" v-model="message" @keyup="search">
                <i class="close el-icon-close" @click="searchClose" v-show="closeState"></i>
            </div>
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
                message: '',
                // 关闭按钮显示
                closeState: false,

                searchState: {"showhot": true, "showdetail": false, "searchtext": '', "showsug": false}
            }
        },
        props: {
            
        },
        watch: {},
        methods: {
            // 模糊查询
            search () {
                //console.log(this.$refs.searchval.value,'11111111111')
                //console.log(this.message,document.getElementById("s-search-text").value, '22222222222222')
                /**
                 * 在搜索输入为中文输入法时，通过v-model获取不到值，即this.message为空
                 * **/
                let searchText = this.$refs.searchval.value
                if (searchText =='') {
                    return
                } else {
                    this.closeState = true
                    this.searchState.showsug = true
                    this.searchState.searchtext = this.$refs.searchval.value
                    this.$emit('searchstate', this.searchState)
                }
                axios.get('http://localhost:3000/search/suggest?keywords=' + searchText, {}, {headers:{'Content-Type':'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res,222)
                        if (res.data.code == 200) {
                            this.$emit('search', res.data.result.allMatch)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            // 搜索关闭
            searchClose () {
                this.message = ''
                this.closeState = false
                this.searchState.showsug = false
                this.searchState.searchtext = this.message
                this.$emit('searchstate', this.searchState)
            },
            // 返回上一页
            goBack () {
                window.history.back()
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
    @import "../../../assets/less/mixin.less";

    .box {
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 24px;
    }
    @bgcolor: #df4239;
    .search{
        .s-search{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            z-index: 1000;
            background: @bgcolor;
            .s-inputcover{
                height: 100%;
                display: flex;
                .back{
                    .box
                }
                input{
                    width: 100%;
                    height: 36px;
                    border: 0;
                    background: @bgcolor;
                    color: #fff;
                    opacity: .9;
                    border-bottom: 1px solid #fff;
                    box-sizing: border-box;
                    margin: 7px 10px 7px 0;
                    caret-color: #fff;
                    outline: none;
                }
                input::-webkit-input-placeholder {
                    color: #fff;
                    opacity: .3;
                }
                .close{
                    position: absolute;
                    right: 16px;
                    height: 50px;
                    line-height: 50px;
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
    }
</style>