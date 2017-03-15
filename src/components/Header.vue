/** * Created by lesonli on 2016/11/16. */
<template>
    <div class='header-light'>
        这是header,showLoginDialog:{{this.showLoginDialog}}
    </div>
</template>
<style lang="scss">
    .header-light {
        padding: 0px 100px;
        height: 50px;
        line-height: 50px;
        width: 100vw;
        min-width: 1024px;
        box-sizing: border-box;
        z-index: 900;
        background-color: #1F2D3D;
        color:#fff;
        border-bottom: 1px solid #eeeeee;
    }
</style>
<script>
    export default {
        data() {
            return {
                showLoginDialog: false
            }
        },
        methods: {
            
        }
    }

</script>