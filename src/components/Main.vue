<template>
    <div class="main">
        <div class="user-header">
            <img class="header-avatar" :src="userInfo.avatar_large" alt="">
            <span class="header-name">{{userInfo.name}}</span>
            <div class="header-refresh" @click="refresh">
               <span class="iconfont">&#xe608;</span>
           </div>
        </div>
        <nav class="switch-tab">
           <el-row>
               <el-col :span="8" :class = "currentPage == 'home'? 'active' : '' " @click="showHomePage()">主页</el-col><!--
            --><el-col :span="8" :class = "currentPage == 'explore'? 'active' : '' " >探索</el-col><!--
            --><el-col :span="8" :class = "currentPage == 'notify'? 'active' : '' " >消息</el-col>
           </el-row>
               </nav>
        <div class="content">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<script>
    import { mapActions,mapGetters } from  'vuex'
    export default{
        name:'main',
        data(){
            return {
                currentPage:'home'
            }
        },
        created(){
            this.getUserInfo(this.token.uid);
            this.showHomePage();
        },
        computed:{
            ...mapGetters({
                token:'token',
                userInfo:'userInfo'
            })
        },
        methods:{
            ...mapActions([
                'getUserInfo',
                'getHomeTimeline'
            ]),
            refresh(){
                switch (this.currentPage){
                    case 'home':
                        this.getHomeTimeLine(1);
                        break;
                }
            },
            showHomePage(){
                this.$router.push({ name : 'home' });
                this.currentName = 'home';
            }/*,
            showExplorePage(){
                this.$router.push({ name: 'explore' });
                this.currentName = 'explore';
            },
            showNotifyPage(){
                this.$router.push({ name:'notify' });
                this.currentName = 'notify'
            }*/
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss"  scoped>
    .main{
        height: 100%;
        background:#F5F5F5;
        padding:0.7rem;
        .user-header{
            height:8.8%;
            background:white;
            border:#e3e3e5 3px solid;
            text-align:left;
            border-bottom:none;
            .header-avatar{
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                margin-left: 0.8rem;
                margin-top:0.6rem;
            }
            .header-name {
                font-size: 1.8rem;
                font-weight: lighter;
                vertical-align: top;
                display: inline-block;
                margin-top: 1.9rem;
                margin-left: 1rem;
            }
            .header-refresh{
                display: inline-block;
                float:right;
                .el-icon-loading {
                    animation: rotating 1s linear infinite;
                    font-size: 2.4rem;
                    vertical-align: middle;
                    margin-top: 1.7rem;
                    margin-right: 1.8rem;
                }
            }
        }
        .switch-tab{
            width: 100%;
            height: 4rem;
            text-align: center;
            box-sizing: border-box;
            padding-top: 1rem;
            font-size: 1.58rem;
            background: #F3F5F5;
            border: #e3e3e5 3px solid;
            border-top: none;
            .el-row{
                width: 100%;
                height: 100%;
                .el-col{
                    width: 33.3%;
                    height: 99%;
                }
            }
        }
        .active{
            color: blue;
            border-bottom:#007AFF solid 0.13rem;
        }
        .content::-webkit-scrollbar {display:none}
        .content{
            width: 100%;
            height: calc(100% - 7.5% - 1rem);
            overflow-y:scroll;
            overflow-x:hidden;
        }
    }
    .fade-enter-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
