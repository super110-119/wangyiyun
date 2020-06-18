import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import topList from "../list/topList";
import playList from "../list/playList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/topList',
      component: topList
    },
    {
      path: '/playList',
      component: playList
    },
  ]
})
