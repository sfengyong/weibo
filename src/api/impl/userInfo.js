/**
 * Created by admin on 2017/7/13.
 */
import axios from 'axios';
import { HOST_CONFIG, API_ROUTER_CONFIG ,DEBUG } from '../../api/config/api-config'
import store from "../../store"

export const getUserInfo = (userId,userName,okCallback,errorCallback) =>{
    if(DEBUG){
        //调试模式
    }

    const accesstoken = store.getters.token.access_token;
    var request_data = {
        access_token:accesstoken,
        uid:userId,
        screen_name:userName
    }
    var config = {
        method:'get',
        url:API_ROUTER_CONFIG.userinfo,
        baseURL:HOST_CONFIG.host,
        params:request_data,
        headers:{
            'Content-Type':'application/json'
        }
    }

    axios(config)
        .then(response =>{
            okCallback(response.data);
        })
        .catch(error =>{
            errorCallback(error)
        })
}