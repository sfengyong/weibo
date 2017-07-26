/**
 * Created by admin on 2017/7/13.
 */

export const saveUserInfo = (userInfo) =>{
    const localStorage = window.localStorage ;
    try{
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
    }catch (error){
        console.log(error);
    }
}