<template>
    <div class='view home-view'>
        <my-header></my-header>
        <div style="padding-top:100px;text-align:center">
            {{info}}<br >
            <h1>{{message}}</h1>
         <el-button @click="login">请求数据</el-button>          
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        data() {
            return {
                info:"这是首页,欢迎消息: "
            }
        },
        computed:{
            message:function()
            {
                return this.$store.state.hello.message;
            }        
        },
        methods: {
            login() {
                //alert('welcome!')
                this.$store.dispatch('getMessage');
            },
        },
        components: {
            'my-header': Header
        }
    }

</script>
<style lang="scss">
    .home-view {
    }
</style>