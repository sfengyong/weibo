/**
 * Created by admin on 2017/7/15.
 */
import {
    HOME_TIMELINE,
    HOME_REFRESH
}from "../mutations-type"
import * as api  from "../../api/impl/home-timeline"

const state = {
    statuses:[],
    option:{
        refresh:false,
        page:0
    }
}

const mutations = {
    [HOME_REFRESH](state,refresh){
        if(refresh){
            state.option.page = 0 ;
        }
        state.option.refresh = refresh;
    },
    [HOME_TIMELINE](state,data){
        state.statuses = data;
        state.option.page++;
    }
}

const actions = {
    getHomeTimeLine:( { commit },page )=>{
        if( page == 1 ){
            commit( HOME_REFRESH , true );
        }else{
            commit( HOME_REFRESH , false);
        }
        api.getHomeTimeLine(
            page,
            response =>{
                commit(HOME_TIMELINE,response.statuses);
                commit(HOME_REFRESH,false);
            },
            error =>{
                console.log(error);
            }
        )
    }
}

export default {
    state,
    actions,
    mutations
}