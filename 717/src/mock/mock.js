import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios);

import goods_channel from '../../service/goods_channel.json'
import category from '../../service/category.json'

let ls = window.localStorage;

mock.onGet('/service/goods_channel',{
    channel_id:/\d/
}).reply(200,goods_channel)

mock.onGet('/h5/category',{cate_id:/\d/}).reply(200,function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(category);
        },2000);
    })
})

mock.onPost('/mine/register').reply(function(arg){
    let data = JSON.parse(arg.data);
    let userObj = [];
    let can_register = true;
    if(ls.getItem('user')){
        userObj = JSON.parse(getItem('user'));
    }
    userObj.forEach((val)=>{
        if(val.telephone&&val.telephone == data.telephone){
            can_register = false;
        }
    })
    if(can_register){
        userObj.push(data);
        ls.setItem('user',JSON.stringify(userObj));
        return [200,{code:1,msg:'注册成功'}];
    }else{
        return [200,{code:0,msg:'账号已注册'}]
    }
})

mock.onPost('/mine/verify').reply(function(config){
    let tel = Object.values(JSON.parse(config.data))[0];
    let vCode = tel.slice(-4);
    return [200,vCode]
})

mock.onPost('/mine/login').reply(function(config){
    let info = JSON.parse(config.data);
    let user = JSON.parse(ls.getItem('user'));
    let can_login = false;
    user.forEach((val)=>{
        if(val.telephone == info.telephone&&val.password == info.password){
            can_login = true;
        }
    })
    if(can_login){
        document.cookie = 'telephone=' + info.telephone;
        return[200,{code:1,msg:'恭喜您登陆成功'}]
    }else{
        return[200,{code:0,msg:'该用户尚未注册'}]
    }
})