/**
 * Created by admin on 2017/7/10.
 */
const key_config = {
    /**FY*/
    app_key: '581452948',
    app_secret: '0829ab04cfa6ab4c3a46d10e1b0e7234',


    /*gzw*/
    /*app_key: '3649014334',
     app_secret: '2027f22418c283c500c467b93ff23437',*/

    redirect_uri: 'http://192.168.232.243:8089/splash'
}

const host_config = {
    local: 'http://192.168.232.243:8089/',
    host: 'http://127.0.0.1:3000/',
    oauth: 'https://open.weibo.cn/oauth2/authorize',
}
const api_router_config = {
	oauth_post: '/oauth2/access_token',
    home_timeline: '/statuses/home_timeline.json',
    userinfo:'/users/show.json'
}


export const HOST_CONFIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
export const DEBUG = false
