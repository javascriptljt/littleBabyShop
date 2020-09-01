<template>
    <div>
        <van-search 
        v-model="value" 
        placeholder="新春大促销"
        shape="round"
        >
        </van-search>
        <classicTab></classicTab>
    </div>
</template>


<script>
import classicTab from './classicCom/classicTab'
export default {
     data() {
    return {
      value: '',
    };
  },
  components:{
      classicTab
  },
}
</script>


<style lang="scss">
.van-field__control{
    height: 20px;
}
</style>