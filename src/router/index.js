import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import understandUs from '@/components/understandUs'
import aslide from '@/components/aslide'
import brand from '@/components/brand'
import popularity from '@/components/popularity'
import market from '@/components/market'
import Win from '@/components/Win'
import imageDisplay from '@/components/imageDisplay'
import messageBoard from '@/components/messageBoard'
import contactUs from '@/components/contactUs'
import callmidea from '@/components/callmidea'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/understandUs',
      name: 'understandUs',
      component: understandUs
    },
    {
      path: '/aslide',
      name: 'aslide',
      component: aslide
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
     {
      path: '/popularity',
      name: 'popularity',
      component: popularity
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
     {
      path: '/Win',
      name: 'Win',
      component: Win
    },
     {
      path: '/imageDisplay',
      name: 'imageDisplay',
      component: imageDisplay
    },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: messageBoard
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/callmidea',
      name: 'callmidea',
      component: callmidea
    }
  ]
})
