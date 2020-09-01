//引入http模块
import http from './http';

const api = {
    getSwiper(){
       return http.get('/home/banner')
    },
    getRecommend(params){
        return http.post('/home/recommend',params)
    },
    getClassic(params){
        return http.post('/classify',params)
    },
    getReg(params){
        return http.post('/register/getCode',params)
    },
    getToken(params){
        return http.post('/register',params)
    },
    getDetails(params){
        return http.post('/detail',params)
    }   
}
export default api