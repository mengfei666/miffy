import Vue from 'vue';
import VueRouter from 'vue-router';
import index from "../view/index/index.vue";
import question from '../view/question/question.vue';
import result from '../view/result/result.vue';
Vue.use(VueRouter);
const routes =[
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/question/:id',
    component:question
  },
  {
    path:'/result',
    component:result
  }
];
let router = new VueRouter({
  routes:routes
})
export default router;