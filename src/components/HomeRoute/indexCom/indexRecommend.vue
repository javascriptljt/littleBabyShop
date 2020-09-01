<template>
    <div class="wrapBox">
        <h3>推荐商品</h3>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        >
           <van-card
                v-for="(item,index) in recommendList"
                :key="index"
                :price="item.currentPrice"
                desc="描述信息"
                :title="item.productName"
                :thumb="item.imgUrl"
                :origin-price="item.originalPrice"
                >
                </van-card>
        </van-list>
    </div>
</template>


<script>
export default {
  data() {
    return {
      recommendList: [],
      count:10,
      page:1,
      error:false,
      loading: false,
      finished: false,
    };
  },
  created(){
      //  this.onLoad()
  },
  methods: {
   async onLoad() {
     if(!this.loading) {
       return ''
     }else{
       // 异步更新
     this.loading = true
     await this.$store.dispatch('getIndexRecommendA',{
         count :10,
         page:1
     }).then(()=>{
        this.recommendList = this.recommendList.concat(this.$store.state.indexRecommend);
        this.page++
     })
     if(this.page>5){
       this.finished = true
     }
     this.loading = false
     }
     }
  },
};
</script>

<style lang="scss" scoped>
.wrapBox{
    width: 100%;
    background-color: #fff;
    h3{
        border-left: 6px solid orange;
        font-size: 18px;
        font-weight: 400;
        padding-left: 10px;
        margin: 10px 0px;
    }
}
</style>