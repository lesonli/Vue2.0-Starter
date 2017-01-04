/**
 * Created by lesonli on 2016/11/16.
 */
<template>
    <div>
        <!--<header-component/>-->
        <div>this is Header page</div>
        <!--<other-component/>-->
    </div>
</template>
<style lang="scss" scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script lang="babel">
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
