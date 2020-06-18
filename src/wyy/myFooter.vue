<template>
    <div class="my-foot">
        <div class="demo"></div>
        <div class="demo-foot"></div>
    </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped>
  .my-foot{
    width: 1894px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background-color: #f5f5f5;
  }
  .demo{
    height: 45px;
  }
  .demo-foot{
    background-image: url("../assets/slideshow/foot.png");
    background-size: cover;
    height: 203px;
  }
</style>
