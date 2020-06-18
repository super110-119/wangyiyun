<template>
  <div id="top-list">
    <myHeader/>
    <myTopList/>
    <myFooter/>
  </div>
</template>

<script>
    import myHeader from "../wyy/myHeader";
    import myTopList from "../item/myTopList";
    import myFooter from "../wyy/myFooter";

    export default {
        name: "topList",
        components:{
          myHeader,
          myTopList,
          myFooter,
        }
    }
</script>

<style scoped>
#top-list{
  background-color: #f5f5f5;
}
</style>
