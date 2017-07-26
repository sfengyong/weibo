/**
 * Created by admin on 2017/7/10.
 */
const URL_REG = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g;
const AT_REG = /@[\u4e00-\u9fa5a-zA-Z0-9_-]{2,30}/g;
const TAG_REG = /#[^#]+#/g;

export const getUrlKey = (key) =>{
   return decodeURIComponent((new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

export const formatContent = content =>{
   let format = content.replace(URL_REG,function($0){
       return '<a href="$0" >' + $0 + '</a>';
   });
   format = format.replace(AT_REG,function($0){
      return '<a href="$0" class="AT_LINK">' + $0+ '</a>';
   });
   format = format.replace(TAG_REG,function($0){
       return '<a href="$0" class="AT_LINK">' + $0+ '</a>';
   });
    return format;
}

export const formatImgMiddle = (img) =>{
    return img.replace("thumbnail",'bmiddle');
}


export const formatImgThumb = img =>{
   let format = img.replace("thumbnail","bmiddle");
   return format;
}