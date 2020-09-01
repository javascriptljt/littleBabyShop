<template>
    <div id="homeWrap">
        <HeaderBar></HeaderBar>
        <router-view></router-view>
        <FooterTabbar></FooterTabbar>
    </div>
</template>

<script>

//底部导航栏
import FooterTabbar from '../components/footerTabbar';
//顶部导航栏
import HeaderBar from '../components/HomeRoute/headerBar'
export default {
    components:{
    FooterTabbar,
    HeaderBar
  }
}
</script>

<style lang="scss" scoped>
#homWrap{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>