<template>
    <div class="body-right">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
    </div>
</template>

<script>
    export default {
        name: "bodyRight"
    }
</script>

<style scoped>
  .body-right{
    width: 385px;
    background-color: #fff;
    height: 2114px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    overflow: hidden;
  }
  .body-right div{
    width: 385px;
    background-color: black;
    background-size: cover;
  }
  .img1{
    background-image: url("../assets/slideshow/dl.png");
    height: 190px;
  }
  .img2{
    background-image: url("../assets/slideshow/demo1.png");
    height: 750px;
  }
  .img3{
    background-image: url("../assets/slideshow/demo2.png");
    height: 500px;
  }
</style>
