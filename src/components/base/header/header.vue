<template>
    <div class="header-warpper">
        <i class="menu el-icon-menu" @click="showMenu"></i>
        <div class="header-nav" @click="hideMenu">
            <router-link tag="i" to="/video">
                <i class="el-icon-circle-plus"></i>
            </router-link>
            <router-link tag="i" to="../../song">
                <i class="el-icon-circle-plus"></i>
            </router-link>
            <router-link tag="i" to="../../release">
                <i class="el-icon-circle-plus"></i>
            </router-link>
        </div>
        <i class="search el-icon-search" @click="search"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'
    import { store, mapState } from 'vuex'
    export default {
        components: {

        },
        data () {
            return {
                //isShowMenu: this.showMenu
            }
        },
        props: {

        },
        watch: {},
        methods: {
            showMenu () {
                document.getElementById('mask').style.display = 'block'
                document.getElementById('sidebar').style.transform = 'translateX(100%)'
            },
            hideMenu () {

            },
            search () {
                this.$router.push({
                    path: '../search'
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
    .box {
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 26px;
    }
    .header-warpper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        z-index: 100;
        background: #df4239;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .menu{
            .box
        }
        .header-nav{
            i{
                color: #fff;
                font-size: 26px;
                padding: 10px 12px;
            }
        }
        .search{
            .box
        }
    }

</style>