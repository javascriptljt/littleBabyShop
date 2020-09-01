<template>
    <div class="detailsWrap">
         <van-swipe 
         class="my-swipe" 
         :autoplay="3000" 
         indicator-color="white"
         @change="onChange"
         >
            <van-swipe-item
            v-for="(item,index) in detailsData.imgArr"
            :key="index"
            >
            <van-image
            width="100%"
            height="100%"
            lazy-load
            :src="item"
            />
            </van-swipe-item>
             <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/{{imgLength}}
                </div>
            </template>
         </van-swipe>
         <van-cell-group>
                <van-cell :label="'普通价 ¥'+detailsData.originalPrice">
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title">¥{{detailsData.currentPrice}}</span>
                        <van-tag 
                        round
                        type="danger">会员特惠</van-tag>
                    </template>
                </van-cell>
                <van-cell :title="detailsData.title"  size="large" :label="detailsData.describe"></van-cell>
                <van-cell title="选择 更多规格" is-link class="chioceCell"></van-cell>
                <van-cell title="商品评论 （0）" is-link value="好评" class="talkCell"></van-cell>
                <van-cell title="推荐商品" is-link  class="talkCell"></van-cell>
         </van-cell-group>
         <van-goods-action>
            <van-goods-action-icon icon="arrow-left" text="返回上一页" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="gotoCart"/>
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
       <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="this.$store.state.details.productId"
        :reset-selected-sku-on-hide="true"
        lazy-load
        @stepper-change="numChange"
        @add-cart="onAddCartClicked"
        />
    </div>
</template>


<script>
import { Toast } from 'vant'
// import {Toast} from 'vant';

export default {
    data(){
        return {
            current:0,
            imgLength:0,
            show: false,
            sku: {},
            goods: {
                // 默认商品 sku 缩略图
                picture: this.$store.state.details.imgUrl,
            },
            num:1,
        }
    },
    methods:{
       async getData(){
           await this.$store.dispatch('getDetailsA',{
               productId:this.$route.params.id
           }).then(()=>{
               this.imgLength = this.detailsData.imgArr.length
           })
        },
        onChange(index){
            this.current = index
        },
        onClickIcon() {
            this.$router.replace('/Home/classic')
        },
        onClickButton() {
          this.sku = {
                  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '规格', // skuKeyName：规格类目名称
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [
                        {
                        id: '1', // skuValueId：规格值 id
                        name: this.detailsData.title, // skuValueName：规格值名称
                        imgUrl: this.detailsData.imgUrl, // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: this.detailsData.imgUrl// 用于预览显示的规格类目图片
                        }
                    ],
                    largeImageMode: true, //  是否展示大图模式
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: this.detailsData.productId, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    price: this.theTotalPrice * 100, // 价格（单位分）
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: this.detailsData.currentPrice, // 默认价格（单位元）
                stock_num: 110, // 商品总库存
                collection_id: '', // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                    // 商品留言
                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '0', // 是否必填 '1' 表示必填
                    placeholder: '' // 可选值，占位文本
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            }
            //    console.log(this.imgUrl)
            //    await this.getData()
            this.show  = !this.show
        },
        numChange(value){
            this.num = value
            this.sku.list[0].price = this.theTotalPrice * 100
        },
        gotoCart(){
            this.$router.replace('/Home/cart')
        },
        onAddCartClicked(skudata){
            console.log(skudata);
            if(this.$cookies.isKey(skudata.selectedSkuComb.id)){
                let lastPrice = this.$cookies.get(skudata.selectedSkuComb.id).price
                let lastNum = this.$cookies.get(skudata.selectedSkuComb.id).num
                this.$cookies.set(skudata.selectedSkuComb.id,JSON.stringify({
                    id:skudata.selectedSkuComb.id,
                    price:skudata.selectedSkuComb.price/100+lastPrice,
                    num:skudata.selectedNum+lastNum,
                    img:this.detailsData.imgUrl,
                    title:this.detailsData.title,
                    productName:this.detailsData.productName
                    }),60 * 60 * 24)
            }else{
                this.$cookies.set(skudata.selectedSkuComb.id,JSON.stringify({
                    id:skudata.selectedSkuComb.id,
                    price:skudata.selectedSkuComb.price/100,
                    num:skudata.selectedNum,
                    img:this.detailsData.imgUrl,
                    title:this.detailsData.title,
                    productName:this.detailsData.productName
                    }),60 * 60 * 24)
            }
            Toast('宝贝已在购物车等您！')
        }
    },
    computed: {
        detailsData() {
            return this.$store.state.details
        },
        theTotalPrice(){
            return this.$store.state.details.currentPrice * this.num
        }
    },
  async  created(){
       await this.getData()
    }
}
</script>


<style lang="scss">
.detailsWrap{
    width: 100%;
    position: absolute;
    top: 50px;
    left: 0px;
    right: 0px;
    z-index: 99;
    background-color: #f3f3f3;
    padding-bottom: 100px;
     .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
    height: 375px;
  }
    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 20%;
    background: rgba(0, 0, 0, 0.3);
    color: white;
  }
    .custom-title {
    margin-right: 4px;
    vertical-align: middle;
    font-size: 30px;
    color: orange;
    font-weight: 100;
  }
  .van-tag {
      font-size: 12px;
      background-color: rgba(0,0,0,0.1);
      color: lightcoral;
  }
  .talkCell,.chioceCell{
      margin-top: 20px;
  }
  .van-cell-group{
      background-color: #f3f3f3;
  }
  .van-button{
      border-radius: 0;
  }
}
</style>