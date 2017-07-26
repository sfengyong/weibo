import {
	LOGIN,
	LOGOUT,
	TOKEN
} from '../mutations-type'

import { saveToken ,getToken} from '../../utils/token-storage'
import { oauthPost } from '../../api/impl/auth'


const state = {
	token:{},
	login:false,
	logout:true
}

const mutations = {
	[LOGIN](state,token){
		state.token = token;
		state.login = true;
		state.logout = false;
		saveToken(token);
	}
}

const actions = {
	login:({commit},code)=>{
		oauthPost(
			code,
			response =>{
				commit(LOGIN,response.data);
			},
			err =>{
				console.log(err);
			}
		)
	},
	getToken:({commit}) =>{
		const token = getToken();
		if(token){
			commit(LOGIN,JSON.parse(token))
		}
	}
}

export default {
	state,
	actions,
	mutations
}