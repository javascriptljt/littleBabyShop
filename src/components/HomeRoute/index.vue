<template>
<div class="indexWrap">
    <van-swipe 
    :autoplay="3000"
    height="150"
    class="indexSwiper"
    indicator-color="#fff"
    >
        <van-swipe-item 
        v-for="(image, index) in swiperList" 
        :key="index"
        >
            <img v-lazy="image" width="100%" height="150"/>
        </van-swipe-item>
   </van-swipe> 
   <van-grid
    :border="false"
    :clickable="true"
   >
        <van-grid-item 
        v-for="(item,index) in indexBanner"
        :key="index"
        :icon="item.icon" 
        :text="item.name" 
        :style="{'color':item.color}"
        />
  </van-grid>
  <indexMidNav></indexMidNav>
  <indexRecommend></indexRecommend>
</div>
</template>


<script>
import indexMidNav from './indexCom/indexMidNav';
import indexRecommend from './indexCom/indexRecommend'
export default {
    data(){
        return{
            swiperList:'',
            indexBanner:[
                {
                    name:'每日福利',
                    icon:'point-gift',
                    routePath:'',
                    color:'orange'
                },
                {
                    name:'热销榜',
                    icon:'hot',
                    routePath:'',
                    color:'red'
                },
                {
                    name:'皮噜甄选',
                    icon:'goods-collect',
                    routePath:'',
                    color:'yellow'
                },
                {
                    name:'会员中心',
                    icon:'card',
                    routePath:'',
                    color:'purple'
                },
            ]
        }
    },
    created(){
        this.getSwiperData()
    },
    methods:{
       async getSwiperData(){
         await this.$store.dispatch('getIndexSwiperA');
         this.swiperList = this.$store.state.indexSwiper;
        }
    },
    components:{
        indexMidNav,
        indexRecommend
    }
}
</script>


<style lang="scss">
.indexWrap{
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 46px;
    bottom: 0;
    .indexSwiper{
        .van-swipe__indicator{
            border-radius: 25%;
            width: 20px;
            height: 2px;
        }
    }
}
</style>