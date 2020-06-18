<template>
    <div class="body-width">
        <div class="body-data">
          <div><bodyLeft/></div>
          <div><bodyRight/></div>
        </div>
    </div>
</template>

<script>
  import bodyLeft from "./bodyLeft";
  import bodyRight from "./bodyRight";
    export default {
        name: "myBody",
      components:{
        bodyLeft,
        bodyRight
      }
    }
</script>

<style scoped>
.body-width{
  width: 1894px;
  background-color: #f5f5f5;
}
  .body-data{
    width: 1474px;
    margin: 0 auto;
    display: flex;
  }
</style>
