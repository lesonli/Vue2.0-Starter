<template>
  <div class="hello">
    <c-title :text="title"></c-title>
    <img class="logo" src="../assets/logo.png">
    <p class="welcome">欢迎使用 vue</p>
    <router-link to="/login">Go to login</router-link>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script lang="babel">

  import Vue from 'vue';
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'Hello Vue!'
      }
    },
    computed: {
      content(){
        return this.$store.state.hello.message
      }
    },
    methods: {
       getContent () {

      }
    },
    mounted () {
      //this.$store.commit('MESSAGE', '欢迎使用 vue！');
      this.$store.dispatch('get_message');
     // this.getContent();
    },

    components: {cTitle}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
  .content{
    display: flex;
  }
</style>
