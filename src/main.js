import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入vue-cookies插件
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
//引入echarts插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { 
  Tabbar, 
  TabbarItem,
  Icon,
  NavBar,
  Swipe, 
  SwipeItem,
  Toast, 
  Lazyload,
  Grid, 
  GridItem,
  Image as VanImage,
  Loading ,
  List,
  Cell, 
  CellGroup,
  Card,
  Search,
  Sidebar,
  SidebarItem,
  GoodsAction, 
  GoodsActionIcon,
  GoodsActionButton,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Empty,
  Field,
  Button,
  Tag,
  Sku,
  Stepper
} from 'vant';
//底部tab栏
Vue.use(Tabbar);
Vue.use(TabbarItem);
//顶部导航栏
Vue.use(NavBar);
//icon图标
Vue.use(Icon);
//引入swiper
Vue.use(Swipe);
Vue.use(SwipeItem);
//引入toast插件
Vue.use(Toast);
//引入懒加载插件
Vue.use(Lazyload);
//引入grid插件
Vue.use(Grid);
Vue.use(GridItem);
//引入图片组件
Vue.use(VanImage);
//引入加载组件
Vue.use(Loading);
//引入上拉刷新列表插件
Vue.use(List);
//引入单元格插件
Vue.use(Cell);
Vue.use(CellGroup);
//引入商品卡片插件
Vue.use(Card);
//引入搜索插件
Vue.use(Search);
//引入侧边导航栏
Vue.use(Sidebar);
Vue.use(SidebarItem);
//引入详情页按钮
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
//引入购物车提交按钮
Vue.use(SubmitBar);
//引入多选框
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
//引入空状态提示
Vue.use(Empty);
//引入输入框
Vue.use(Field);
//引入按钮
Vue.use(Button);
//引入标签插件
Vue.use(Tag);
//引入商品导航
Vue.use(Sku);
//引入步进器
Vue.use(Stepper);
//引入rem的基准设置
import  'amfe-flexible';
//引入全局样式初始化文件
import '../src/assets/style/common.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
