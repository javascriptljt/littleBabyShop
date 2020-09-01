<template>
    <div class="classicTabBox">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item 
            v-for="(item,index) in classicTabList"
            :key="index"
            :title="item.name"
            @click="changeClassic(index)" 
            ></van-sidebar-item>
        </van-sidebar>
        <div class="classicContent">
            <div 
            @click="toDetails(item.productId)"
            v-for="(item,index) in classicDataList" 
            :key="index" 
            class="classicItem">
                <van-image
                width="99" 
                height="99" 
                lazy-load
                :src="item.imgUrl" 
                >
                 <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
                </van-image>
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
    return {
      activeKey: 0,
      type:1,
      classicTabList:[
          {
              name:'推荐分类',
              type:'1'
          },
          {
              name:'全球奶粉',
              type:'2'
          },
          {
              name:'尿不湿',
              type:'3'
          }
      ],
      classicDataList:[]
    };
  },
  methods:{
     async getClassicData(){
         await this.$store.dispatch('getClassicA',{
          type:this.type
      }).then(()=>{
          this.classicDataList = this.$store.state.classic.result
      })
      },
      changeClassic(index){
          this.type = this.classicTabList[index].type
          this.getClassicData()
      },
      toDetails(Id){
          this.$router.replace(`/Home/details/${Id}`)
      }
  },
    created(){
      this.getClassicData()
  }
  
}
</script>

<style lang="scss">
.classicTabBox{
    position: relative;
    display: flex;
    justify-content: space-between;
.van-sidebar-item--select::before{
    background-color: orange;
}
.classicContent{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .classicItem{
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        font-size: 12px;
    }
}
}
</style>