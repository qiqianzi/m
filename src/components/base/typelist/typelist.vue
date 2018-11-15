<template>
    <div clsas="typelist" @click="current">
        <i class="el-icon-circle-plus"></i>
        <div class="list-detail">
            <span class="name">{{listName}}</span>
            <span class="count">{{listCount}}</span>
            <div class="border" v-if="showBorder"></div>
            <i class="sound el-icon-circle-plus" v-if="showSound"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        components: {

        },
        data () {
            return {
                name: {
                    type: String,
                    default: ''
                },
                count: {
                    type: String,
                    default: '1'
                },
                border: {
                    type: Boolean,
                    default: true
                },
                sound: {
                    type: Boolean,
                    default: false
                }
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