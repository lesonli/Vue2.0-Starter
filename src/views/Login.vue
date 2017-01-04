/**
 * Created by lesonli on 2016/11/16.
 */
<template>
    <div>
        <div>this is login page</div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <router-link to="/home/hello">Go to hello</router-link>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script lang="babel" scoped>
    //import HeaderComponent from './components/header.vue'
    //import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }/*,
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }*/
    }
</script>
