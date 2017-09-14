<template>
  <div class='question_index'>
    <div class='header'>
      <h1>{{name}} 第{{count}}题/共四题</h1>
      {{question_name}}
    </div>
    <div class='under'>
      <ul>
        <li @click='clicks(0)' :class='arrs[0]'>
          <span></span>{{option[0]}}
        </li>
        <li @click='clicks(1)' :class='arrs[1]'>
          <span></span>{{option[1]}}
        </li>
        <li @click='clicks(2)' :class='arrs[2]'>
          <span></span>{{option[2]}}
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
        arrs:["","",""],
        question_name:'',
        option:[],
        name:'',
        count:0
    }
  },
  created:function(){
    let type=this.$route.query.type;
    this.$store.dispatch('get_question_list',type);
    this.question_name=this.$store.state.selected_question[this.$route.params.id*1-1].title;
    this.option=this.$store.state.selected_question[this.$route.params.id*1-1].answers;
    this.name=this.$store.state.selected_question[this.$route.params.id*1-1].subjectCh;
    this.count=this.$route.params.id;
  },
  methods:{
    clicks:function(idx){
      this.arrs=["","",""];
      this.arrs[idx]='active';
      setTimeout(()=>{
        if(this.$route.params.id>=4){
          this.$router.replace('/result');
          
        }else{
          this.$router.replace('/question/'+(this.$route.params.id*1+1));
          this.question_name=this.$store.state.selected_question[this.$route.params.id*1-1].title;
          this.option=this.$store.state.selected_question[this.$route.params.id*1-1].answers;
          this.name=this.$store.state.selected_question[this.$route.params.id*1-1].subjectCh;
          this.count=this.$route.params.id;
        }
        this.arrs=["","",""];
        
     
      },500)
    }
  }
}
</script>
<style lang="scss">
  .question_index{
    position:absolute;
    left:5%;
    top:20px;
    width:90%;
    height:60%;
    background:url('../../imgs/bg-qustion-top.png') no-repeat;
    background-size:contain
  }
  .header{
    padding:20px;
    box-sizing:border-box;
    font-size:12px;
    width:100%;
    min-height:58px;
    height:auto;
    background:url('../../imgs/bg-question-center.png') no-repeat;
    background-position:left bottom;
    margin-top:44px;
    background-size:100% 100%;
  }
  .header h1{
    color:#23c485;
    position:absolute;
    font-size:12px;
    top:5px;
    width:100%;
    text-align:center;
    left:0;
  }
  .under{
    min-height:308px;
    height:auto;
    background:url('../../imgs/bg-question-bottom.png') no-repeat;
    background-size:100% 100%;
  }
  .under ul{
    padding-top:10px;
    list-style:none;
    box-sizng:border-box;
    padding:0 10% 0 5%;
  }
  .under ul li{
    background:url('../../imgs/btn-bg-select.png') no-repeat;
    background-size:100% 200%;
    background-position:left top;
    height:40px;
    float: left;
    width: 100%;
    margin-top: 10px;
    color:#fff;
    display:flex;
    align-items:center;
  }
  .under ul li span{
    width:30px;
    height:30px;
    display:inline-block;
    margin:0 10px;
  }
  .under ul li:nth-child(1) span{
    background:url('../../imgs/a.png') no-repeat;
    background-size:contain;
  }
  .under ul li:nth-child(2) span{
    background:url('../../imgs/b.png') no-repeat;
    background-size:contain;
  }
  .under ul li:nth-child(3) span{
    background:url('../../imgs/c.png') no-repeat;
    background-size:contain;
  }
  .under ul li.active{
    background-position:left bottom;
  }
</style>