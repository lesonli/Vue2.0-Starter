/**
* Created by lesonli on 2016/11/15.
*/
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    //font-family: Source Sans Pro, Helvetica, sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
    text-align: center;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
