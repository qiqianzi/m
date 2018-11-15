<template>
    <div class="mask" id="mask" @click="close"></div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'

    export default {
        components: {

        },
        data () {
            return {

            }
        },
        props: {

        },
        watch: {},
        methods: {
            close () {
                document.getElementById('mask').style.display = 'none'
                document.getElementById('sidebar').style.transform = 'translateX(0)'
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

    .mask{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #606463;
        opacity: .5;
        z-index: 999;
        display: none;
    }
</style>