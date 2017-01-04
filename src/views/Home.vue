/**
 * Created by lesonli on 2016/11/16.
 */
<template>
    <div>
        <header-component/>
        <side-menu/>
        <div>this is template body</div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
    body{
        background-color:#fff;
    }
</style>
<script lang="babel" >
    import Header from '../components/Header'
    import SideMenu from '../components/SideMenu'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'header-component':Header,
            'side-menu':SideMenu
        }
    }
</script>
