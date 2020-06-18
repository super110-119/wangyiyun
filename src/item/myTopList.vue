<template>
  <div class="my-topList">
    <div class="topList-left">
        <div class="list-title">
            <h3>云音乐特色榜</h3>
            <ul>
                <li v-for="(value,index) in res1" :key="index" :id="value.data.playlist.id">
                  <div class="list-img" :style="{backgroundImage:'url('+value.data.playlist.coverImgUrl+')'}"></div>
                  <div class="list-p">
                    <p>{{value.data.playlist.name}}</p>
                  </div>
                </li>
            </ul>
            <h3>全球媒体榜</h3>
            <ul>
              <li v-for="(value,index) in res2" :key="index" :id="value.data.playlist.id">
                <div class="list-img" :style="{backgroundImage:'url('+value.data.playlist.coverImgUrl+')'}"></div>
                <div class="list-p">
                  <p>{{value.data.playlist.name}}</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
<div class="topList-right"> <!--   -->
      <div class="right-box">
        <div class="right-nav">
          <div class="right-nav-img" :style="{backgroundImage:'url('+bg+')'}"></div>
          <div class="right-nav-p">
            <h4>{{myName}}</h4>
            <div></div>
          </div>
        </div>
        <div class="right-list">
          <div class="right-list-nav">歌曲列表</div>
          <ul class="right-list-item">
            <li v-for="(item,index) in demoList" :key="index">
              <span>{{++index}}</span>.{{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
    export default {
      name: "myTopList",
      data() {
        return{
          demo:[],
          gb:'',
          myName:'',
          myId:3,
          demoList:[],
          res1:[],
          res2:[],
          index1:[3, 0, 2, 1],
          index2:[23,5, 6, 21, 7, 8, 9, 20, 19, 4, 15, 18, 10, 11, 12 ,13, 14, 16, 17],//23, 24, 25, 26, 27, 22, 28, 29, 30, 5, 6, 21, 7, 8, 9, 20, 31, 32, 19, 4, 15, 18]
        }
      },
      mounted() {
        let self = this;
        this.index1 = this.index1.map(value => axios.get('http://musicapi.leanapp.cn/top/list?idx='+value));
        axios.all(this.index1)
        .then(res =>{
          self.res1 = res;
        })
        .catch(err=>{
          console.log(err);
        });
        this.index2 = this.index2.map(value => axios.get('http://musicapi.leanapp.cn/top/list?idx='+value));
        axios.all(this.index2)
          .then(res =>{
            self.res2 = res;
          })
          .catch(err=>{
            console.log(err);
          });
        axios.get('http://musicapi.leanapp.cn/top/list?idx='+self.myId)
          .then(res =>{
            self.demo = res.data.playlist;
            self.bg=self.demo.coverImgUrl;
            self.myName=self.demo.name;
            self.demoList=self.demo.tracks;
          })
          .catch(err=>{
            console.log(err);
          });
      },
      beforeUpdate(){
        let self = this;
        let lis = document.querySelectorAll('.my-topList li');
        for(let i=0; i<lis.length; i++){
          lis[i].onclick = function () {
            self.myId = this.id;
            console.log(self.myId)
          }
        }
      }
  }
</script>

<style scoped>
.my-topList{
  width: 1473px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  display: flex;
}
ul{
  list-style: none;
}
  .topList-left{
    width: 363px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .topList-right{
    width: 1110px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .list-title{
    width: 100%;
  }
  .list-title h3{
    margin-top: 60px;
    margin-left: 22px;
    font-size: 19px;
  }
.list-title ul{
  width: 100%;
  margin-top: 20px;
}
.list-title ul li{
  margin: 18px 0px 15px 30px;
  display: flex;
  width: 100%;
  height: 93px;
}
.list-img{
  width: 60px;
  height: 60px;
  background-size: cover;
}
.list-p{
  margin-left: 15px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.right-box{
  width: 1006px;
  margin: 60px auto;
}
.right-nav{
  width: 100%;
  display: flex;
}
  .right-nav-img{
    width: 238px;
    height: 238px;
    border: 5px solid #d3d3d3;
    box-sizing: border-box;
    background-size: cover;
  }
  .right-nav-p{
    margin: 45px;
  }
.right-nav-p h4{
  font-size: 28px;
}
.right-nav-p div{
  width: 140px;
  height: 45px;
  background-image: url("../assets/slideshow/bf.png");
  background-size: cover;
}
  .right-list-nav{
    border-bottom: 5px solid #c20c0c;
    font-size: 30px;
    margin-top: 68px;
  }
  .right-list-item{
    margin-top: 25px;
  }
  .right-list-item li{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
.right-list-item li span{
  color: #999;
}
</style>
