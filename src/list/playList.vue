<template>
<div id="play-list">
  <myHeader/>
  <myPlayList/>
  <myFooter/>
</div>
</template>

<script>
  import myHeader from "../wyy/myHeader";
  import myPlayList from "../item/myPlayList";
  import myFooter from "../wyy/myFooter";
    export default {
        name: "playList",
      components:{
        myHeader,
        myPlayList,
        myFooter
      }
    }
</script>

<style scoped>
#play-list{
  width: 100%;
  background-color: #f5f5f5;
}
</style>
