<template>
    <div class="play-list">
      <div class="play-list-box">
        <div class="play-list-head">全部</div>
        <ul>
          <li v-for="(value,index) in res" :style="{backgroundImage:'url('+value.picUrl+')'}" :key="index">
            <h5>{{value.name}}</h5>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "myPlayList",
      data(){
          return{
            res:[],
          }
      },
      mounted() {
          let self = this;
          axios.get('http://musicapi.leanapp.cn/personalized')
        .then(res=>{
          self.res = res.data.result;
        })
        .catch(err=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
.play-list{
  width: 1475px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  margin: 0 auto;
}
.play-list-box{
  width: 1350px;
  margin: 70px auto;
}
  .play-list-head{
    font-size: 35px;
    border-bottom: 3px solid #c20c0c;
    padding-bottom: 10px;
  }
  li{
    list-style: none;
    display: inline-block;
    width: 212px;
    height: 212px;
    margin: 36px 25px;
    background-size: cover;
  }
  li h5{
    margin-top: 216px;
    font-size: 19px;
    white-space: nowrap;/*不允许换行*/
    overflow: hidden;/*超出隐藏*/
    text-overflow: ellipsis;/*文本超出三点代替*/
  }
</style>
