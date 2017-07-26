<template>
  <div id="app">
        <transition name = "fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    @font-face {
        font-family: 'iconfont';  /* project id 354140 */
        src: url('http://at.alicdn.com/t/font_cv6zoojfi4vuc8fr.eot');
        src: url('http://at.alicdn.com/t/font_cv6zoojfi4vuc8fr.eot?#iefix') format('embedded-opentype'),
        url('http://at.alicdn.com/t/font_cv6zoojfi4vuc8fr.woff') format('woff'),
        url('http://at.alicdn.com/t/font_cv6zoojfi4vuc8fr.ttf') format('truetype'),
        url('http://at.alicdn.com/t/font_cv6zoojfi4vuc8fr.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:iconfont;
        font-style:normal;
    }
    *{
        margin: 0;
        padding: 0;
    }
    ul,li{
        list-style:none;
    }
    html{
        font-size: 62.5%;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    h1, h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
    }

    a {
        color: #999;
        text-decoration: none;
    }
    .AT_LINK{
        color: #307d74;
    }

    .fade-enter-active{
        transition:opacity .5s;
    }

    .fade-enter,
    .fade-leave-active{
        opacity:0;
    }
</style>
