<template>
    <div class="wrapBox">
        <div 
        v-for="(item,index) in midNav" 
        :key="index"
        :style="{'background':item.bgcolor}"
        class="midNavItem"
        >
            <h3>{{item.name}}</h3>
            <van-image
            lazy-load
            :src="item.img"
            width="70"
            height="40"
            >
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
            </van-image>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            midNav:[
                {
                    name:'全球奶粉',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    bgcolor:'lightpink'
                },
                {
                    name:'尿不湿',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    bgcolor:'lightgreen'
                },
                {
                    name:'营养辅食',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    bgcolor:'lightsalmon'
                },
                {
                    name:'宝宝洗护',
                    img:'https://img.yzcdn.cn/vant/cat.jpeg',
                    bgcolor:'lightblue'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapBox{
    padding: 0px 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .midNavItem{
        width: 49%;
        height: 100px;
        margin-top: 5px;
        display: flex;
        justify-content: space-evenly;
        h3{
            font-size: 16px;
        }
    }
}
</style>