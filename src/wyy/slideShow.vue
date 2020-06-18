<template>
  <div class="slide-show">
    <div class="container"> <!-- container为固定容器,适用与各个屏幕 -->
      <div class="carousel slide" id="demo" data-ride="carousel">
        <div class="carousel-inner border">
          <!-- 1、轮播图图片的容器 -->
          <div class="carousel-item active">
            <img src="../assets/slideshow/01.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/02.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/03.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/04.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/05.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/06.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/07.jpg" class="w-100">
          </div>
          <div class="carousel-item">
            <img src="../assets/slideshow/08.jpg" class="w-100">
          </div>
        </div>
        <!-- 2、左右箭头 -->
        <a href="#demo" class="carousel-control-prev an-prev rounded mr-3" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#demo" class="carousel-control-next an-prev rounded ml-3" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <!-- 3、指示器 -->
        <ul class="carousel-indicators">
          <li data-target = "#demo" data-slide-to="0" class="active"></li>
          <li data-target = "#demo" data-slide-to="1"></li>
          <li data-target = "#demo" data-slide-to="2"></li>
          <li data-target = "#demo" data-slide-to="3"></li>
          <li data-target = "#demo" data-slide-to="4"></li>
          <li data-target = "#demo" data-slide-to="5"></li>
          <li data-target = "#demo" data-slide-to="6"></li>
          <li data-target = "#demo" data-slide-to="7"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'slideShow',

  }
</script>

<style scoped>
  .slide-show{
    width: 1894px;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .container{
    width: 1510px;
    overflow: hidden;
  }
  .carousel-indicators{
    z-index: 30;
  }
</style>
