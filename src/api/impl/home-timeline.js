/**
 * Created by admin on 2017/7/15.
 */
import axios from 'axios'
import { HOST_CONFIG, API_ROUTER_CONFIG, DEBUG} from '../../api/config/api-config'
import store from "../../store"
 export const getHomeTimeLine = ( page, okCallback ,errorCallback ) =>{

    if(DEBUG){
    }
    const accesstoken = store.getters.token.access_token;
    var request_data = {
        access_token:accesstoken,
        count:30,
        page:page
    }
    var config = {
        method:'get',
        url:API_ROUTER_CONFIG.home_timeline,
        baseURL:HOST_CONFIG.host,
        params:request_data,
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios(config)
        .then(function(response){
            okCallback(response.data);
        })
        .catch(function(error){
            errorCallback(error);
        })
 }