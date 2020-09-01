<template>
    <div class="cartWrap">
        <div class="cartList">
            <van-empty
            class="custom-image"
            image="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            description="您的购物车是空的"
            v-if="show"
            />
        <div class="cartContent" 
        v-else 
        v-for="(item,index) in cookiesArr" 
        :key="index"
        >
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.productName"
            :title="item.title"
            :thumb="item.img"
            >
            <template #footer>
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
            </template>
            </van-card>
        </div>
        </div>
        <van-submit-bar
         :price="totalPrice * 100" 
         button-text="提交订单" 
         @submit="onSubmit"
          :loading="loading"
          :disabled="disabled"
         >
            <van-checkbox 
            v-model="checked">全选</van-checkbox>
            <template 
            #tip>
                你的收货地址不支持同城送, 
                <span 
                @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>  
</template>


<script>
export default {
    data(){
        return{
            checked:true,
            loading:false,
            disabled:true,
            cookiesArr:[],
            show:true,
            value:0
        }
    },
    methods:{
        onClickEditAddress(){

        },
        onSubmit(){

        },
        getAllCookies(){
            if(this.$cookies.keys()){
                this.$cookies.keys().forEach((value)=>{
                    this.cookiesArr.push(this.$cookies.get(value))
                })
                this.show = false
                console.log(this.cookiesArr);
            }else{
                this.show = true
            }
        }
    },
    created(){
        this.getAllCookies()
    },
    computed:{
        totalPrice(){
            return this.cookiesArr.reduce((last,value)=>{
                return last+=value.price
            },0)
        }
    },
    beforeRouteEnter(to,from,next){
        if(!localStorage.getItem('token')){
           next((vm)=>{
               vm.$router.replace('/Reg')
           })
        }else{
            next()
        }
    }
}
</script>


<style lang="scss">
.cartWrap{
    .van-submit-bar{
        position: fixed;
        bottom: 50px;
    }
    .cartContent{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>