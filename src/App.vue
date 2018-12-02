<template>
  <div id="app">

    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>



  </div>
</template>

<script>


  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
  }
</script>

<style lang="scss">
  @import "common/style/adapter.config";


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    color: #2c3a46;
    font-size: 14px;
    line-height: 1.6em;
    overflow: hidden;
  }

  body {
    font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  }

  #app {
    height:100%;
    overflow: hidden;
    background:
      linear-gradient(
          #f4edc4,
          transparent
      ),
      linear-gradient(
          90deg,
          #f0f1dc,
          transparent
      ),
      linear-gradient(
          -90deg,
          #f3eec7,
          transparent
      );
    background-blend-mode: screen;

    @include flex($jc: center, $al: center);

  }


</style>
