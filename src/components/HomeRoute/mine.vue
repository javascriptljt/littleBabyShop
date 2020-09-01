<template>
    <div class="mineWrap">
        <div v-if="token">
            <div class="mineInfo">
            <van-image
            width="70px"
            height="70px"
            round
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <p>立即登陆</p>
        </div>
        <div class="mineBottomWrap">
            <div class="mineIcon">
                <van-cell title="单元格">
            <!-- 使用  插槽来自定义右侧图标 -->
           <template #label>
                    <van-icon name="balance-list-o" >
                        <span>待付款</span>
                    </van-icon>
                    <van-icon name="send-gift-o" >
                        <span>已付款</span>
                    </van-icon>
                    <van-icon name="logistics" >
                        <span>待发货</span>
                    </van-icon>
                    <van-icon name="cash-on-deliver" >
                        <span>已收货</span>
                    </van-icon>
            </template>
                </van-cell>
            </div>
        </div>
        </div>
        <div v-else>

        </div>
    </div>    
</template>


<script>
export default {
    data(){
        return {
            token:true
        }
    }
}
</script>


<style lang="scss">
.mineWrap{
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    .mineBottomWrap{
        width: 100%;
        height: 500px;
        padding: 0px 20px;
    }
    .mineInfo{
        width: 100%;
        height: 150px;
        background-color: orange;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        p{
            color: white;
            font-size: 16px;

        }
    }
    .mineIcon{
        height:100px;
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
        .van-cell__label{
            display: flex;
            justify-content: space-around;
        }
        .van-icon{
            font-size: 20px;
            color: #333333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        span{
            font-size: 12px;
        }
    }
    .mineIcon2{
        width: 100%;
        height: 150px;
        background-color: #fff;
        margin-top: 20px;
        border-radius: 10px;
    }
}
</style>