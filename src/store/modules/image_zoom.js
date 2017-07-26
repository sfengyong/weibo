/**
 * Created by Administrator on 2017/7/23.
 */
import {
    IMAGE_ZOOM
}from "../mutations-type"

const state = {
    image_url:'',
    show:false
}

const mutations = {
    [IMAGE_ZOOM](state,data){
        state.image_url = data;
        if(data){
            state.show = true;
        }else{
            state.show = false;
        }
    }
}

const actions = {
    setImageZoom:({ commit },data) =>{
        commit(IMAGE_ZOOM ,data)
    }
}

export default {
    state,
    mutations,
    actions
}