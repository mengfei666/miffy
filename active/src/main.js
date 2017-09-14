import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store/index';
import axios from 'axios';
import Vuex from 'vuex';
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  router:router,
  store:store,
  beforeCreate:function(){
  	this.$http.get('./src/js/question.json')
  		.then((result)=>{
  			this.$store.dispatch('get_question',result.data);
  		})
  		.catch(function(){
  			console.log("请求数据失败")
  		})
  },	
  render: h => h(App)
})
