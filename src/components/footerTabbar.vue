<template>
    <van-tabbar 
    v-model="active"
    active-color="orange"
    inactive-color="#000"
    route
    :fixed="true"
   :placeholder="true"
   z-index="10"
    >
        <van-tabbar-item 
        v-for="(item,index) in tabbarList"
        :key="index"
        :icon="item.icon"
        :to="item.routerPath"
        >
        {{ item.name }}
        </van-tabbar-item>
    </van-tabbar>
</template>


<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList:[
          {
              name:'首页',
              routerPath:'/Home/index',
              icon:'wap-home-o'
          },
          {
              name:'分类',
              routerPath:'/Home/classic',
              icon:'user-o'
          },
          {
              name:'购物车',
              routerPath:'/Home/cart',
              icon:'shopping-cart-o'
          },
          {
              name:'我的',
              routerPath:'/Home/mine',
              icon:'qr'
          }
      ]
    };
  },
};
</script>

<style lang="scss" >
.van-tabbar__placeholder{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>