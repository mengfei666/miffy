import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        show_tip:false,
        tip_msg:'添加购物车成功',
        cart_list:[],
        rec_list:[],
        goods:null,
        total_money:0,
        cart_check:{}
    },
    mutations:{
        get_rec_list(state,res){
            let lenth = res.data.length;
            let data = res.data[Math.floor(Math.random()*lenth)].data.data;
            for(let i=0;i<4;i++){
                let num = Math.floor(Math.random()*data.length);
                state.rec_list.push(...data.splice(num,1))
            }
        },
        sum(state,data){
            state.cart_check[data.id] = data.price;
            let money = 0;
            Object.values(state.cart_check).forEach((val)=>{
                money += val;
            })
            state.total_money = money;
        },
        add_to_cart(state,obj){
            state.show_tip = true;
            state.tip_msg = '添加购物车成功';
            let len = state.cart_list.length;
            for (let i = 0; i < len; i++) {
                if (state.cart_list[i].goods_id == obj.goods_id) {
                    state.cart_list[i].count++;
                    return false;
                }
            }
            state.cart_list.unshift(obj);
        },
        del_item(state,obj){
            obj.forEach((val)=>{
                state.cart_list = state.cart_list.filter((item)=>{
                    if(item.goods_id != val.id){
                        return item;
                    }
                })
            })
        }
    },
    actions:{
        set_rec_list({commit},res){
            commit('get_rec_list',res)
        }
    }
})
export default store;