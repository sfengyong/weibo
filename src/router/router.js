import Vue from "vue"
import Router from 'vue-router'
import Splash from "../components/Splash.vue"
import Main from "../components/Main.vue"
import Home from "../components/Home.vue"
import ImageZoom from "../components/ImageZoom.vue"
import * as scrollUtils from "../utils/scroll-position"

import store from '../store/'
import { DEBUG } from "../api/config/api-config"


Vue.use(Router)

const router = new Router({
	mode:'history',
	routes:[
		{
			path:'/splash',
			name:'splash',
			component:Splash
		},
        {
            path:'/imageZoom',
            name:'imageZoom',
            component:ImageZoom
        },
		{
			path:'/main',
			name:'main',
			component:Main,
			meta:{
				requiresAuth:true
			},
			children:[{
				path:'home',
				name:'home',
				component:Home,
				meta:{
					requiresAuth:true
				}
			}
			]
		},

		{
			path:'*',
			redirect:'/splash'
		}
	]
})

let routerList = []

router.beforeEach((to,from,next) => {

	let position = scrollUtils.getScrollTop();
	let currentRouterIndex = routerList.findIndex( e =>{
		return e.path === from.fullPath;
	} );

	if(currentRouterIndex != -1 ){
		routerList[currentRouterIndex].position = position;
	}else{
		routerList.push({
			path:from.fullPath,
			position:position
		});
	}

	store.dispatch('getToken');
	if(to.meta.requiresAuth){
		if(DEBUG){
			next();
		}else{
			const login = store.getters.login;
			if(login){
				next();
			}else{
				next({
					path:'/splash'
				})
			}
		}
	}else{
		next();
	}
	next();
})

router.afterEach((to,from,next) =>{
	let savedPosition = routerList.find( e => {
		return e.path === to.fullPath;
	});
	if( typeof savedPosition !== 'undefined'){
		Vue.nextTick(()=>{
			scrollUtils.setScrollTop(savedPosition.position);
		})
	}else{
		Vue.nextTick(() =>{
			scrollUtils.setScrollTop(0);
		})
	}
})

export default router