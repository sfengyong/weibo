<template>
	<div id="Splash">
		<el-button type = 'info ' class="login" v-on:click="oauth">登录</el-button>
	</div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'
	import { DEBUG,HOST_CONFIG,KEY_CONFIG } from "../api/config/api-config.js"
	import { getUrlKey } from '../utils/string-utils'


	export default{
		data(){
			return{
				oauthCode:getUrlKey('code')
			}
		},
		computed:{
			code:function(){
				if(this.oauthCode){
					return true;
				}else{
					return false;
				}
			},
			...mapGetters({
				loginState:'login'
			})
		},
		watch:{
			loginState:function(newval,oldval){
				if(newval){
					this.goMain();
				}
			}
		},
		mounted(){
			this.checkUrl()
		},
		methods:{
			...mapActions([
				'login'
			]),
		    oauth(){
		        var vue = this;
		        if(DEBUG){
		            vue.goMain();
				}else{
		            var client_id = KEY_CONFIG.app_key;
		            var redirect_uri = KEY_CONFIG.redirect_uri;
		            var oauthUrl = HOST_CONFIG.oauth;
		            window.open( oauthUrl + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri,'_self','',true);
				}
			},
			checkUrl(){
				var vue = this;
				if(vue.loginState){
					vue.goMain()
				}else{
					if(vue.code){
						vue.login(vue.oauthCode);
					}
				}
			},
			goMain(){
				let vue = this;
				setTimeout(function(){
					vue.$router.replace({ name : 'main' });
				},2000);
			},
		}
	}
</script>
<style lang="scss" scoped>
	#Splash {
		width: 100%;
		height: 100%;
		background: rgba(29, 144, 230, 0.2);
		.login {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			width: 5rem;
			height: 1rem;
			bottom: 1rem;
			border-radius: 0.6rem;
			font-size: 0.3rem;
		}
	}

</style>