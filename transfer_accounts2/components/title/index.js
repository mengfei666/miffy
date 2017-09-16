Vue.component("popover",{
    data:function(){
        return{
             datas:[],
             msg:"hello",
             isActive:0,
             show :true
        }
    },
    template:`
    <transition name="animat">
    <div class="box"  v-show="show">
          <h2 class="title">转账记录</h2>
          <ul>
          <li v-for="(item,index) in datas" @click="vClick(index)" :class="{red: isActive == index}">
          <span>{{item.name}}</span>
          <a>{{item.number}}</a>
          </li>
          
          </ul>
          <div class="bottom">
          
             <button class="cancel" @click="cancel">取消</button>
             <button class="confirm" @click="confirm_active">确定</button>
             
          </div>
      </div>
      </transition>
    `,
     beforeCreate:function(){
          this.$http.get("./mock/numer_name.json").then((res)=>{
            console.log(res.data)
            this.datas = Object.values(res.data);
            this.show = true;
         })
     },
     methods:{
          vClick (index) {
              this.isActive = index
            },
            cancel () {
                console.log(1)
                this.show = false;
            },
            confirm_active () {
                 this.show = false;
            }


     }
})
 Vue.prototype.$http=axios;

