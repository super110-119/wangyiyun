<template>
    <div class="body-left">
      <hot-head/>
      <hot-body/>
      <hot-foot/>
    </div>
</template>

<script>
  import hotHead from "./hotHead";
  import hotBody from "./hotBody";
  import hotFoot from "./hotFoot";
    export default {
        name: "bodyLeft",
        components:{
          hotHead,
          hotBody,
          hotFoot
        }
    }
</script>

<style scoped>
  .body-left{
    width: 1096px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    background-color: #fff;
  }
</style>
