<template>
  <div class="hot-foot">
    <div class="hot-foot-nav">
      <div></div>
      <h2>榜单</h2>
    </div>
    <div class="hot-foot-list">
      <div class="hot-foot-item">
          <div class="hot-foot-item-img"  :style="{backgroundImage:'url(http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg)'}"></div>
          <span>云音乐飙升榜</span>
          <ul>
              <li  v-for="(list,index) in itemOne">{{++index}}、{{list.name}}</li>
          </ul>
      </div>
      <div class="hot-foot-item">
        <div class="hot-foot-item-img"  :style="{backgroundImage:'url(http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg)'}"></div>
        <span>云音乐新歌榜</span>
        <ul>
          <li  v-for="(list,index) in itemTwo">{{++index}}、{{list.name}}</li>
        </ul>
      </div>
      <div class="hot-foot-item">
        <div class="hot-foot-item-img"  :style="{backgroundImage:'url(http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg)'}"></div>
        <span>云音乐原创歌曲榜</span>
        <ul>
          <li  v-for="(list,index) in itemThree">{{++index}}、{{list.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "hotFoot",
        data(){
          return{
            itemOne:[],
            itemTwo:[],
            itemThree:[],
            bg:[]
          }
        },
        mounted() {
          let self = this
          axios.get('http://musicapi.leanapp.cn/playList/detail?id=19723756')
            .then(
              res=>{
                self.itemOne = res.data.playlist.tracks.slice(0, 10);
              }
            ).catch(
            err=>{
              console.log(err);
            }
          )
          axios.get('http://musicapi.leanapp.cn/playList/detail?id=3779629')
            .then(
              res=>{
                self.itemTwo = res.data.playlist.tracks.slice(0, 10);
              }
            ).catch(
            err=>{
              console.log(err);
            }
          )
          axios.get('http://musicapi.leanapp.cn/playList/detail?id=2884035')
            .then(
              res=>{
                self.itemThree = res.data.playlist.tracks.slice(0, 10);
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
  .hot-foot{
    width: 1096px;
    margin-bottom: 100px;
  }
  .hot-foot-nav{
    margin: 55px 30px 30px 32px;
    padding: 13px 0;
    border-bottom: 1px solid #c10d0c;
    display: flex;
  }
  .hot-foot-nav div{
    width: 21px;
    height: 21px;
    border: 6px solid red;
    border-radius: 50%;
    margin-top: 8px;
  }
  .hot-foot-nav h2{
    font-size: 29px;
    margin-left: 14px;
  }
  .hot-foot-list{
    width: 1034px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    display: flex;
    background-color: #f5f5f5;
    margin: 0 auto;
  }
  .hot-foot-item{
    width: 344px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    position: relative;
  }
  .hot-foot-item-img{
    margin-top: 30px;
    margin-left: 30px;
    width: 120px;
    height: 120px;
    background-size: cover;
    display: inline-block;
    box-shadow: 1px 8px 15px #4f4f4f;
  }
  .hot-foot-item span{
    font-size: 22px;
    position: absolute;
    top: 45px;
    left: 155px;
  }
  ul{
    width: 340px;
    border-top: 1px solid #d3d3d3;
    margin-top: 28px;
  }
  li{
    margin-left: 30px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    padding-left: 15px;
  }
</style>
