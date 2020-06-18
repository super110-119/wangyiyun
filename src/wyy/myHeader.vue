<template>
    <div class="header">
      <div class="header-top">
        <div class="header-top-right">
          <img src="../assets/wyy-logo.png" alt="网易云">
          <h1 class="h1">网易云音乐</h1>
        </div>
        <div class="header-top-ul">
          <ul v-for="li in bodyLi">
            <li>
              <a href="javascript:;">{{li}}</a>
            </li>
          </ul>
        </div>
        <div class="header-top-left">
          <div class="left-input">
            <img src="../assets/search.png" alt="搜索">
            <input type="text" placeholder="音乐/视频/电台/用户">
          </div>
          <div class="let-czzzx">
            <p><a href="javascript:;">创作者中心</a></p>
          </div>
          <div class="left-a">
            <a href="javascript:;">登录</a>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <ul>
          <a href="javascript:;">
            <li @click="home">推荐</li>
          </a>
          <a href="javascript:;">
            <li @click="toplist">排行榜</li>
          </a>
          <a href="javascript:;">
            <li @click="playlist">歌单</li>
          </a>
          <a href="javascript:;">
            <li @click="djradio">主播电台</li>
          </a>
          <a href="javascript:;">
            <li @click="artist">歌手</li>
          </a>
          <a href="javascript:;">
            <li @click="album">新碟上架</li>
          </a>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myHeader",
        data(){
          return{
            bodyLi:['发现音乐','我的音乐','朋友','商场','音乐人','下载客户端'],
            bottomLi:['推荐','排行榜','歌单','主播电台','歌手','新碟上架'],
          }
        },
        methods:{
          home(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[0].classList.add('active');
            this.$router.push({  //核心语句
              path:'/',   //跳转的路径
            })
          },
          toplist(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[1].classList.add('active');
            this.$router.push({  //核心语句
              path:'/topList',   //跳转的路径
            })
          },
          playlist(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[2].classList.add('active');
            this.$router.push({  //核心语句
              path:'/playList',   //跳转的路径
            })
          },
          djradio(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[3].classList.add('active');
          },
          artist(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[4].classList.add('active');
          },
          album(){
            let list = document.querySelectorAll('.header-bottom li');
            for(let i=0;i<list.length;i++){
              list[i].classList.remove('active');
            }
            list[5].classList.add('active');
          },
        }
    }
</script>

<style scoped>
.header{
  width: 1894px;
  height: 158px;
  user-select: none;
  overflow: hidden;
}
a{
  text-decoration: none;
  color: #fff;
}
  .header-top{
    width: 100%;
    height: 105px;
    background-color: #242424;
    display: flex;
  }
.header-top-right{
  width: 385px;
  height: 105px;
  position: relative;
  user-select: none;
}
.header-top-right img{
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 28px;
  left: 120px;
  cursor: pointer;
}
.h1{
  color: #fff;
  cursor: pointer;
  font-size: 34px;
  top: 36px;
  right: 28px;
  position: absolute;
}
.header-top-ul ul{
  cursor: pointer;
  float: left;
  line-height: 105px;
}
.header-top-ul li a{
  color: #fff;
  font-size: 21px;
}
.header-top-ul li{
  padding: 0 27px;
}
.header-top-ul ul:first-child li{
  background-color: #000;
}

.header-top-ul li:hover{
  background-color: #000;
}
.header-top-left{
  margin-left: 130px;
  display: flex;
  user-select: none;
}
.left-input{
  width: 238px;
  height: 48px;
  margin-top: 28px;
  background-color: #fff;
  border-radius: 23px;
  position: relative;
  overflow: hidden;
  user-select: none;
}
.left-input img{
  width: 21px;
  height: 21px;
  top: 14px;
  left: 14px;
  position: absolute;
}
.left-input input{
  position: absolute;
  top:14px;
  left: 44px;
  border: none;
  outline:none;
  height: 18px;
  font-size: 18px;
}
.let-czzzx{
  margin-top: 29px;
  margin-left: 18px;
  border: 1px solid #4f4f4f;
  border-radius: 24px;
  width: 135px;
  text-align: center;
  height: 48px;
  cursor: pointer;
}
.let-czzzx:hover{
  border-color: #fff;
}
.let-czzzx p{
  line-height: 48px;
  font-size: 16px;
}

.left-a{
  line-height: 105px;
  margin-left: 30px;
}
.left-a a{
  color: #878787;
  font-size: 18px;
}

  .header-bottom{
    width: 100%;
    height: 53px;
    background-color: #c20c0c;
  }
.header-bottom ul{
  margin-left: 383px;
  display: flex;
}
.header-bottom ul a{
  margin: 8px 32px;
  font-size: 18px;
  height: 30px;
}
.header-bottom li{
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 14px;
}
.header-bottom a:hover li{
  background-color: #9b0909;
}
.active{
  background-color: #9b0909;
}
</style>
