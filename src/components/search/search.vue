<template>
    <div class="search">
        <s-search @search="search" @searchstate="searchstate" ref="close"></s-search>
        <div class="s-default" id="s-default">
            <div class="s-classification" id="s-classification" @click="classification" v-if="showhot">
                <i class="el-icon-mobile-phone"></i>
                <span class="s-name">歌手分类</span>
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="s-topsearch" v-if="showhot">
                <h3 class="title">热门搜索</h3>
                <ul class="s-list">
                    <li class="s-item" v-for="hot in hots">
                        <a class="s-link" href="javascript:void(0);">{{hot.first}}</a>
                    </li>
                </ul>
            </div>
            <!--搜索框模糊查询-->
            <div class="s-sug" v-show="sugState">
                <ul>
                    <li class="title">搜索'{{message}}'</li>
                    <li v-for="item in items" @click="show(item)">
                        <i class="el-icon-time"></i>
                        {{item.keyword}}
                    </li>
                </ul>
            </div>
            <!--搜索历史记录-->
            <div class="s-history" v-if="showhot">
                <ul class="s-history-list">
                    <li class="s-history-item" v-for="record in records" @click="searchhistory(record)">
                        <i class="el-icon-time s-time"></i>
                        <div class="s-history-bd">
                            <span>{{record.name}}</span>
                            <i class="el-icon-close s-close" @click.stop="delrecord(record)"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--歌曲搜索详情-->
        <div class="s-searchresult" v-if="state">
            <div class="s-music-details">
                <div class="s-mv-details"></div>
                <p>你可能感兴趣</p>
                <div class="s-list-details">
                    <s-mvlist :artist="artistData"></s-mvlist>
                    <s-mvlist :artist="albumData"></s-mvlist>
                    <s-musiclist :lists="listData"></s-musiclist>
                </div>
            </div>
        </div>

        <s-tabbar></s-tabbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios        from 'axios'
    import search       from '@/components/base/search/search'
    import tabbar       from '@/components/base/tabbar/tabbar'
    import mvlist       from '@/components/base/mvlist/mvlist'
    import musiclist    from '@/components/base/musiclist/musicList'

    export default {
        components: {
            's-search': search,
            's-tabbar': tabbar,
            's-mvlist': mvlist,
            's-musiclist': musiclist
        },
        data () {
            return {
                items: [],
                records: [],
                hots: [],
                message: '',
                listData: [],
                artistData: {},
                albumData: {},
                showhot: true,
                state: false,
                sugState: false
            }
        },
        props: {

        },
        watch: {},
        methods: {
            classification () {
                console.log('classification')
            },
            // 子组件传递的数据
            search (...data) {
                this.items = data[0]
            },
            // 搜索时状态控制
            searchstate (...data) {
                console.log(data, 'aaaaaaaaaaaaaaaaaaaa')
                this.showhot = data[0]["showhot"]
                this.state = data[0]["showdetail"]
                this.message = data[0]["searchtext"]
                this.sugState = data[0]["showsug"]
                // 更新本地缓存历史搜索数据
                // 在搜索详情点击搜索关闭按钮会导致搜索历史名称为空
                this.localStorageData()
            },
            // 热门搜索
            hot () {
                axios.get('http://localhost:3000/search/hot', {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.hots = res.data.result.hots
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            // 歌曲搜索列表
            show (item) {
                console.log(item,444)
                let searchText = item.keyword
                this.records = this.records
                                .filter(item => item.name !== searchText)
                this.records.unshift({"name": searchText})
                if(this.records.length > 5) {
                    this.records = this.records.slice(0, 5)
                }
                localStorage.setItem('key', JSON.stringify({"any": this.records}))
                this.$refs.close.message = searchText
                this.sugState = false
                this.showhot = false
                this.state = true
                axios.get('http://localhost:3000/search/multimatch?keywords=' + searchText, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res,111)
                        if (res.data.code == 200) {
                            this.artistData = res.data.result.artist[0]
                            this.albumData  = res.data.result.album[0]
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                axios.get('http://localhost:3000/search?keywords=' + searchText, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res, 333)
                        if (res.data.code == 200) {
                            this.listData = res.data.result.songs
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            // 删除搜索记录
            delrecord (record) {
                console.log(record, this.records,'333333333333333')
                let name = (typeof record === 'object') ? record["name"] : ''
                this.records = this.records
                                .filter(item => item.name !== name)
                localStorage.setItem('key', JSON.stringify({"any": this.records}))
            },
            // 点击搜索记录
            searchhistory (record) {
                console.log(record,this.records)
                let searchText = (typeof record === 'object') ? record["name"] : ''
                this.records = this.records
                                .filter(item => item.name !== searchText)
                                .unshift({"name": searchText})
                this.$refs.close.closeState = true
                this.$refs.close.message = searchText
                this.sugState = false
                this.showhot = false
                this.state = true
                axios.get('http://localhost:3000/search/multimatch?keywords=' + searchText, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res,'1111111111111111111111111111111')
                        if (res.data.code == 200) {
                            this.artistData = res.data.result.artist[0]
                            this.albumData  = res.data.result.album[0]
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                axios.get('http://localhost:3000/search?keywords=' + searchText, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then((res) => {
                        console.log(res, 333)
                        if (res.data.code == 200) {
                            this.listData = res.data.result.songs
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            localStorageData () {
                //let data = localStorage.removeItem('key')
                // 读取本地存储的搜索记录
                let data = JSON.parse(localStorage.getItem('key'))
                if(data !== null) {
                    this.records = data["any"]
                }
            }
        },
        filters: {},
        computed: {

        },
        created () {

        },
        mounted () {
            this.hot()
            this.localStorageData()
        },
        destroyed () {}
    }
</script>
<style lang="less" scoped>
    @import "../../assets/less/mixin.less";

    .search{
        .s-default{
            .s-classification{
                margin-top: 50px;
                height: 46px;
                line-height: 46px;
                text-align: center;
                .border-1px(#e4e8eb);
            }
            .s-topsearch{
                padding: 15px 10px 0;
                .title{
                    font-size: 12px;
                    line-height: 12px;
                    color: #666;
                    font-weight: 400;
                }
                .s-list{
                    margin:10px 0 7px;
                    padding: 0;
                    .s-item{
                        display: inline-block;
                        height: 32px;
                        margin-right: 8px;
                        margin-bottom: 8px;
                        padding: 0 10px;
                        font-size: 14px;
                        line-height: 32px;
                        color: #333;
                        border: 1px solid #e4e8eb;
                        border-radius: 16px;
                    }
                }
            }
            .s-sug{
                position: fixed;
                left: 24px;
                right: 24px;
                top: 60px;
                background: #fff;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                z-index: 100;
                ul{
                    li{
                        height: 44px;
                        line-height: 44px;
                        font-size: 13px;
                        .border-1px(#e4e8eb);
                        color: #727272;
                        i{
                            font-size: 14px;
                            color: #bcbcbc;
                            padding:0 10px;
                        }
                    }
                    .title{
                        color: #476194;
                        font-size: 15px;
                        padding: 0 10px;
                    }
                }
            }
            .s-history {
                .s-history-list {
                    .s-history-item {
                        display: flex;
                        height: 50px;
                        align-items: center;
                        position: relative;
                        .s-time {
                            padding: 0 10px;
                        }
                        .s-history-bd {
                            flex: 1;
                            display: flex;
                            width: 1%;
                            height: 100%;
                            align-items: center;
                            .border-1px(#e4e8eb);
                            .s-close {
                                position: absolute;
                                right: 10px;
                            }
                        }
                    }
                }
            }
        }
        .s-searchresult{
            padding: 50px 0;
            width: 100%;
            height: 100%;
            display: block;
            .s-music-details{
                p{
                    font-size: 12px;
                    line-height: 16px;
                    color: #666;
                    margin-left: 10px;
                    margin-top: 8px;
                }
            }
        }
    }
</style>
