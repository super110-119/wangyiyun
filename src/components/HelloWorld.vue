<template>
  <div id="helloWorld">
    <my-header/>
    <slide-show/>
    <my-body/>
    <myFooter/>
  </div>

</template>

<script>
  import myHeader from "../wyy/myHeader.vue";
  import slideShow from "../wyy/slideShow.vue";
  import myBody from "../wyy/myBody.vue";
  import myFooter from "../wyy/myFooter.vue";
  export default {
    name: 'HelloWorld',
    components:{
      myHeader,
      slideShow,
      myBody,
      myFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
