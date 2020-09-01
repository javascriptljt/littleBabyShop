import api from '../utils/api'

const actions = {
   async getIndexSwiperA({commit}){
     return await api.getSwiper().then((res)=>{
        commit('getIndexSwiperM',res.data.result.list)
        })
    },
    async getIndexRecommendA({commit},payload){
       return await api.getRecommend(payload)
        .then((res)=>{
            commit('getIndexRecommendM',res.data.result.list)
        })
    },
    async getClassicA({commit},payload){
        return await api.getClassic(payload)
         .then((res)=>{
             commit('getClassicM',res.data)
         })
     },
    async getTokenA({commit},payload){
        return await api.getToken(payload)
        .then((res)=>{
            commit('getTokenM',res.data.result.token)
        })
    },
    async getDetailsA({commit},payload){
        return await api.getDetails(payload)
        .then((res)=>{
            commit('getDetailsM',res.data.result)
        })
    }
}

export default actions