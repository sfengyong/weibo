/**
 * Created by Administrator on 2017/7/24.
 */

export function getScrollTop(){
    var content = document.getElementsByClassName("content")[0];
    if(content){
        return content.scrollTop;
    }else{
        return 0;
    }
}

export function setScrollTop(value){
    var content = document.getElementsByClassName("content")[0];
    if(content)
    {
        content.scrollTop = value;
    }

}