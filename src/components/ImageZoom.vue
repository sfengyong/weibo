<template>
    <div id="imageZoom">
        <div class="imgWrap" @click = 'goBack()'>
            <img :src="image_zoom_url" alt="">
        </div>
    </div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'
    export default{
        name:'image-zoom',
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters({
                image_zoom_url:'image_zoom_url'
            })
        },
        methods:{
            ...mapActions([
                'setImageZoom'
            ]),
            goBack(){
                this.setImageZoom(null);
                window.history.go(-1);
            }
        }
    }


</script>
<style  lang="scss" rel="stylesheet/scss" scoped>
#imageZoom{
    width: 100%;
    height: 100%;
    background: black;
    position: relative;
    .imgWrap{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        img{
            width: 100%;
        }
    }
}
</style>
