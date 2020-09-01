const mutations = {
    getIndexSwiperM(state,payload){
        state.indexSwiper = payload
    },
    getIndexRecommendM(state,payload){
        state.indexRecommend = payload
    },
    getClassicM(state,payload){
        state.classic = payload
    },
    getTokenM(state,payload){
        state.token = payload
    },
    getDetailsM(state,payload){
        state.details = payload
    }
}
export default mutations