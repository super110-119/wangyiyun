<template>
  <div class="hot-head">
    <div class="hot-head-nav">
      <div></div>
      <h2>热门推荐</h2>
      <ul v-for="list in hotNav">
        <li>{{list}}</li>
      </ul>
    </div>
    <div class="hot-head-list">
      <div class="row" >
        <div class="col-2" v-for="(sum,index) in list" :key="index" :style="{backgroundImage:'url('+sum.picUrl+')'}">
          <p><a href="javascript:;">{{sum.name}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "hotHead",
        data(){
          return{
            hotNav:['华语','|','流行','|','摇滚','|','民谣','|','电子'],
            list:[],
          }
        },
        mounted() {
          let self = this
          axios.get('http://musicapi.leanapp.cn/personalized?limit=8')
          .then(
              res=>{
                self.list = res.data.result;
                // console.log(self.list);
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
.hot-head{
  width: 1096px;
}
  .hot-head-nav{
    margin: 25px 30px 30px 32px;
    padding: 13px 0;
    border-bottom: 1px solid #c10d0c;
    display: flex;
  }
.hot-head-nav div{
  width: 21px;
  height: 21px;
  border: 6px solid red;
  border-radius: 50%;
  margin-top: 8px;
}
.hot-head-nav h2{
  font-size: 29px;
  margin-left: 14px;
}
.hot-head-nav ul{
  margin-left: 19px;
  margin-top: 2px;
}
.hot-head-nav ul li{
  margin: 0 11px;
  color: #666;
  font-size: 18px;
  user-select: none;
  cursor: pointer;
}

.hot-head-list{
  width: 1096px;
}
.row{
  width: 100%;
  margin: 30px;
}
.col-2{
  height: 180px;
  margin: 38px 38px;
  padding: 5px;
  background-size: cover;
  cursor: pointer;
}
.col-2 p{
  margin-top: 180px;
}
.col-2 a{
  font-size: 19px;
  color: black;
}
</style>
