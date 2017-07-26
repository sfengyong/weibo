<template>
	<div class="home">
		<div class="list" v-for = "x in list">
			<fy-content :x = "x"></fy-content>
		</div>
	</div>

</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
	export default{
		name:'home',
		data(){
			return {
				list:[]
			}
		},
		created(){
		    this.homeTimeline(1);
		},
		computed:{
			...mapGetters({
			    statuses:'home_timeline',
				option:'home_timeline_option'
			})
		},
		watch:{
		    option:{
		      handler:function(newval,olaval){
		          if(newval && newval.page == 1 ){
		              this.list = [];
				  }
			  },
				deep:true
			},
		    statuses:function (newval,oldval) {
				if(newval){
					if( this.option.page == 1 ){
					    this.list = newval;
					}else{
					    this.list = [...this.list,...newval];
					}
				}
            }
		},
		methods:{
			...mapActions([
			    'getHomeTimeLine'
			]),
			homeTimeline(page){
			    this.getHomeTimeLine(page);
			},

		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.home{
	width:100%;
	height:calc(100% - 7.5% - 1rem);
	.list:not(:first-child){
		margin-top: 1rem;
	}
	.list{
		background: white;
		box-sizing: border-box;
		padding-left: 1.3rem;
		padding-right: 0.4rem;
	}
}
</style>