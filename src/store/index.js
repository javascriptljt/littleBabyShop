import Vue from 'vue'
import Vuex from 'vuex'
//引入state文件
import state from './state';
//引入mutations文件
import mutations from './mutations';
//引入actions文件
import actions from './actions';
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
