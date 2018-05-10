import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nav from '@/components/nav'
import about from '@/components/about'
import adv from '@/components/adv'
import product from '@/components/product'
import analysis from '@/components/analysis'
import strength from '@/components/strength'
import raiders from '@/components/raiders'
import vi from '@/components/vi'
import question from '@/components/question'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/nav', name: 'nav', component: nav},
    {path: '/about', name: 'about', component: about},
    {path: '/adv', name: 'adv', component: adv},
    {path: '/product', name: 'product', component: product},
    {path: '/analysis', name: 'analysis', component: analysis},
    {path: '/strength', name: 'strength', component: strength},
    {path: '/raiders', name: 'raiders', component: raiders},
    {path: '/vi', name: 'vi', component: vi},
    {path: '/question', name: 'question', component: question},
    {path: '/contact', name: 'contact', component: contact}
  ]
})
