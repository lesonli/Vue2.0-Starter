<template>
  <div>
    <c-title :text="title" :hide="true"></c-title>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="babel">
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'ERROR!',
        message:'404 Not Found！'
      }
    },
    components: {cTitle}
  }
</script>