<template>
    <div class="msg" v-show="tooltop">
        <span class="s-msg-title">{{message}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios             from 'axios'
    
    export default {
        components: {
            
        },
        data () {
            return {
                tooltop: false,
                message: ''
            }
        },
        props: {

        },
        watch: {},
        methods: {
            
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
    //@import "../../assets/less/mixin.less";
    
    .msg {
        position: fixed;
        height: 46px;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        background-color: #606060;
        transition: opacity .3s,transform .4s,-webkit-transform .4s;
        display: flex;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;
        z-Index: 1003;
        -webkit-animation: move_eye 0.5s linear 0s;
           -moz-animation: move_eye 0.5s linear 0s;
             -o-animation: move_eye 0.5s linear 0s;
                animation: move_eye 0.5s linear 0s;
        @-webkit-keyframes move_eye { from { bottom:-46px; } to { bottom:20px; }  };
           @-moz-keyframes move_eye { from { bottom:-46px; } to { bottom:20px; }  };
             @-o-keyframes move_eye { from { bottom:-46px; } to { bottom:20px; }  };
                @keyframes move_eye { from { bottom:-46px; } to { bottom:20px; }  };
        animation-fill-mode: forwards;            
        .s-msg-title {
            color: #fff;
            padding: 15px;
        }
    }
</style>