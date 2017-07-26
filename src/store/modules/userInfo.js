/**
 * Created by admin on 2017/7/13.
 */
import {
    USERINFO
} from "../mutations-type"
import { saveUserInfo } from "../../utils/user-storage"
import * as api from "../../api/impl/userInfo"

const state = {
    userInfo:{}
}

const mutations = {
    [USERINFO](state,userInfo){
        state.userInfo = userInfo;
        saveUserInfo(userInfo);
    }
}

const actions = {
    getUserInfo: ( { commit },uid) =>{
        api.getUserInfo(uid, null,response =>{
            commit(USERINFO,response)
        },
        err =>{
            console.log(err)
        })
    }
}

export default {
    state,
    actions,
    mutations
}


