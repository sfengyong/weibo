<template>
	<div class="content">
		<div class="list-header">
			<img :src="x.user.avatar_large" alt="" class="avatar">
			<div class="user-info">
				<h3 class="user-name">{{x.user.name}}</h3>
				<span class="user-source" v-html="x.source"></span>
			</div>
			<span class="user-time">{{formatTime(x.created_at)}}</span>
		</div>
		<div class="list-content">
			<span class="content-text" v-html="formatContent(x.text)"></span>
			<div class="content-img" v-if="x.pic_urls.length !=0">
				<ul class="clear-fix">
					<li v-for="y in x.pic_urls" class="img-li-default" :class="imgClass(x.pic_urls.length)"  @click = "imageZoom(y.thumbnail_pic)">
						<div :style="{backgroundImage:'url(' + formatThumbImg(y.thumbnail_pic) + ')'}"></div>
					</li>
				</ul>
			</div>
			<div class="content-re-content" v-if = "x.retweeted_status">
				<span v-if="x.retweeted_status.user.name" v-html="formatContent('@' + x.retweeted_status.user.name +':')"></span>
				<span class="re-content-text" v-html="formatContent('@' + x.retweeted_status.user.name + ':'+ x.retweeted_status.text)"></span>
				<div class="content-img" v-if="x.retweeted_status.pic_urls.length !=0">
					<ul class="clear-fix">
						<li v-for="y in x.retweeted_status.pic_urls" class="img-li-default" :class="imgClass(x.retweeted_status.pic_urls.length)" >
							<div :style="{backgroundImage:'url(' + formatThumbImg(y.thumbnail_pic) + ')'}"></div>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-list">
				<li class="iconfont"><span class="icon">&#xe64e;</span><span class="count">{{x.reposts_count}}</span></li>
				<li class="iconfont"><span class="icon">&#xe616;</span><span class="count">{{x.comments_count}}</span></li>
				<li class="iconfont"><span class="icon">&#xe600;</span><span class="count">{{x.attitudes_count}}</span></li>
			</div>
		</div>

	</div>
</template>
<script>
	import * as DateUtils from "../../../utils/date-utils"
	import * as StringUtils from "../../../utils/string-utils"
	import { mapActions , mapGetters } from 'vuex'

	export default{
		name:'fy-content',
		props:[
			'x'
		],
		data(){
			return {
			};
		},
		methods:{
			...mapActions([
			    'setImageZoom'
			]),
			imageZoom(url){
			    this.setImageZoom(this.formatMidImg(url));
			    this.$router.push({ name: 'imageZoom' });
			},
		    formatTime(time){
		        return DateUtils.format(time)
			},
			formatContent(content){
		      return StringUtils.formatContent(content);
			},
			imgClass(length){
		        if(length == 1){
		            return 'img-one';
				}else if( length == 2 || length == 4){
					return 'img-four';
				}else{
				    return 'img-nine';
				}
			},
            formatThumbImg(img){
			    return StringUtils.formatImgThumb(img);
			},
			formatMidImg(img){
                return StringUtils.formatImgMiddle(img)
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
	.clear-fix::after {
		content: '';
		display: block;
		clear: both;
	}
	.content{
		text-align:left;
		line-height: 1.6rem;
		.list-header{
			box-sizing: border-box;
			padding-bottom: 0.5rem;
			.avatar{
				width: 4rem;
				height: 4rem;
				margin-top: 0.6rem;
				border-radius: 50%;
				vertical-align: top;
			}
			.user-info{
				display: inline-block;
				vertical-align: top;
				margin-top: 0.9rem;
				.user-name{

				}
			}
			.user-time{
				float: right;
				color: #999;
				margin-top: 0.9rem;
				margin-right: 1rem;
			}
		}
		.list-content{
			.content-text{
				font-size: 1.4rem;
				color: black;
			}
			.content-img{
				ul{
					margin-top: 0.8rem;
					.img-one{
						width: 52%;
					}
					.img-four{
						width: 43%;
					}
					.img-nine{
						width: 28%;
					}
					li{
						float: left;
						margin-right: .2rem;
						margin-top: .2rem;
						div{
							width: 100%;
							padding-bottom: 100%;
							background-position: center;
							background-repeat: no-repeat;
							background-size:cover;
						}
					}
				}
			}
			.content-re-content{
				width: 98%;
				box-sizing: border-box;
				padding: 0.5rem;
				background: #f5F5F5;
				border: #e3e3e5 1.2px solid;
				border-radius: 3px;
				margin-top: 1rem;
				.re-content-text{

				}
			}
			.footer-list{
				margin-top: 1rem;
				li{
					width: 5rem;
					display: inline-block;
					.icon{
						font-size: 2.1rem;
						color: gray;
					}
				}
			}
		}
	}

</style>