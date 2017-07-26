import fyContent from './src/Content.vue'

fyContent.install = Vue =>{
	Vue.component(fyContent.name,fyContent)
}

export default fyContent