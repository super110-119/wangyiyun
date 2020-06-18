<template>
    <div class="hot-body">
      <div class="hot-body-nav">
        <div></div>
        <h2>新蝶上架</h2>
      </div>
      <div class="hot-body-lite">
        <ul>
          <li v-for="(any ,index) in list" :key="index" :style="{backgroundImage:'url('+any.picUrl+')'}">
            <h3>{{any.name}}</h3>
            <p>{{any.company}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "hotBody",
      data(){
          return{
            list:[],
          }
      },
      mounted() {
        let self = this
        axios.get('http://musicapi.leanapp.cn/top/album?offset=0&limit=5')
          .then(
            res=>{
              self.list = res.data.albums;
            }
          ).catch(
          err=>{
            console.log(err);
          }
        )
      }
    }
</script>

<style scoped>
  .hot-body{
    width: 1096px;
  }
  .hot-body-nav{
    margin: 125px 30px 30px 32px;
    padding: 13px 0;
    border-bottom: 1px solid #c10d0c;
    display: flex;
  }
  .hot-body-nav div{
    width: 21px;
    height: 21px;
    border: 6px solid red;
    border-radius: 50%;
    margin-top: 8px;
  }
  .hot-body-nav h2{
    font-size: 29px;
    margin-left: 14px;
  }

  .hot-body-lite{
    width: 1032px;
    margin: 28px auto;
    height: 280px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    box-sizing: border-box;
  }
  .hot-body-lite ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .hot-body-lite ul li{
    width: 162px;
    height: 150px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    margin-top: 44px;
    background-size: cover;
    box-shadow: 1px 1px 5px #4f4f4f;
  }
  .hot-body-lite ul li h3{
    font-size: 17px;
    margin-top: 155px;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hot-body-lite ul li p{
    font-size: 16px;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
