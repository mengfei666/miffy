import Vue from 'vue'
import Router from 'vue-router'
import entry from '../views/entry/index.vue'
import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import mine from '../views/mine/mine.vue'
import search from '../views/search/search.vue'
import result from '../views/result/result.vue'
import goods_details from '../views/goods_details/goods_details.vue'
import login from '../views/login/login.vue'
import bindPhone from '../views/bindPhone/bindPhone.vue'
import address from '../views/address/address.vue'
import newAdr from '../views/newAdress/newAdress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name: 'entry'
      }
    },
    {
      name: 'entry',
      path: '/entry',
      component:entry,
      redirect:{name: 'home'},
      children:[
        {
          name: 'home',
          path: 'home',
          component: home
        },
        {
          name: 'category',
          path: 'category/:index?',
          component: category
        },
        {
          name: 'cart',
          path: 'cart',
          component: cart
        },
        {
          name: 'mine',
          path: 'mine',
          component: mine
        },
        {
          name: 'result',
          path: 'result',
          component: result
        }
      ]
    },
    {
      name: 'search',
      path: '/search',
      component: search
    },
    {
      name: 'goods_details',
      path: '/goods_details',
      component: goods_details
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'bindPhone',
      path: '/bindPhone',
      component: bindPhone
    },
    {
      name: 'address',
      path: '/address',
      component: address
    },
    {
      name: 'newAdr',
      path: '/newAdr',
      component: newAdr
    }
  ]
})



