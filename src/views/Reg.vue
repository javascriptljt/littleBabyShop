<template>
    <div class="regWrap">
        <van-field
        v-model="phone"
        center
        clearable
        label="手机号："
        placeholder="请输入手机号"
        clickable
        class="regForm"
        >
            <template #button>
                <van-button 
                size="small"
                 type="primary"
                 @click="sendCode"
                 :disabled="disabled"
                 >{{btnTips}}</van-button>
            </template>
        </van-field>
        <van-field 
        class="regForm" 
        v-model="tel" 
        type="tel" 
        label="验证码：" />
        <van-button 
        type="primary" 
        block
        @click="login"
        :loading="loading"
        >块级元素</van-button>
    </div>
</template>


<script>
import api from '../utils/api'
export default {
    data(){
        return{
            phone:'',
            tel:'',
            disabled:false,
            btnTimer:'',
            loading:false,
            btnTips:'发送验证码'
        }
    },
    methods:{
        sendCode(){
            this.btnTips = '30秒后再试'
            api.getReg({
                phone:this.phone,
                templateId:537707
            }).then(()=>{
                this.disabled = true
                let time = 30
                this.btnTimer = setInterval(() => {
                    time--
                    if(time <1){
                        this.disabled = false;
                        clearInterval(this.btnTimer)
                        this.btnTips = '发送验证码'
                    }
                }, 1000);
            })
        },
       async login(){
           this.loading = true
           await this.$store.dispatch('getTokenA',{
                phone:this.phone,
                code:this.tel
            }).then(()=>{
                if(this.$store.state.token){
                    localStorage.setItem('token',this.$store.state.token)
                    this.$router.replace('/')
                }
                this.loading = false
            })
        }
    }
}
</script>


<style lang="scss">
.regWrap{
    background-color: #f3f3f3;
    .regForm{
        border: 1px solid #f3f3f3;
    }
}
</style>