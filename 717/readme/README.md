##717项目总结：
*__________________________________________________________________
##框架结构
  首先，使用的是vue脚手架搭建的一个框架，我采用vuex做数据层的统一管理，配置应用vuex技术，配置路由也得跳转和嵌套，搭建整个项目的框架，
  然后分发下去进行各页面的效果实现。里面渲染数据用的是axios框架。
*——————————————————————————————————————————————————————————————————
##上拉加载
  首先第一步判断滚动条的位置，在商品列表这绑定一个事件@scroll，监听一下滚动条的位置，定义一个属性，然后通过调用这个属性来监听列表的的位置
   <div class="container" ref="container" @scroll="load_goods">
   然后通过获取页面高度，滚动条高度，屏幕的高度