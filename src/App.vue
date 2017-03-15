/** * Created by lesonli on 2016/11/15. */
<template>
    <div class='app' id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss">

    body {
        margin: 0;
        height: 100%;
        height: auto !important;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    }
    
    .app {
        /*height: 100%;*/
        /*overflow: hidden;*/
    }
    
    .view {
        /*height: 100%;*/
        overflow: hidden;
    }
    
    .view-container {
        /*height: 100%;*/
        box-sizing: border-box;
        /*overflow-y: scroll;*/
        &.has-header {
            padding-top: 100px;
        }
        &.has-footer {
            /*padding-bottom: 260px;*/
        }
    }
    
    .view-md {
        max-width: 1200px;
        min-width: 800px;
        margin: 0 auto;
    }
</style>