<template>
  <div id="index">

    <div class="intro index-item">
      <div class="intro-main">
        <div class="main-avatar"></div>
        <h1 class="main-title">Chen JingJing</h1>
        <h2 class="main-tag">Web Developer</h2>
        <h3 class="main-desc">本网站大部分内容为本人学习记录的笔记</h3>
      </div>
    </div>

    <ul class="art-list index-item" @click="getBooks">
      <router-link :to="'/chapter/' + item.id" class="art-item" v-for="item in books">
        <i class="art-thumb" :style="{backgroundImage: 'url(' + item.thumb + ')'}"></i>
        <div class="art-date-wrap">{{item.date_publish}}</div>
        <h3 class="art-title">{{item.name}}</h3>
        <router-link class="art-button" to="/article/100">LOOK</router-link>
      </router-link>
    </ul>

  </div>
</template>

<script>

  import http from '../common/js/http'

  export default {
    name: 'index',
    data() {
        return {
          books: []
        }
    },

    methods: {
      getBooks() {
        http.get(this.$http, 'books', null, (res) => {
          this.books = res.books;
        })
      }
    },

    mounted() {
      this.getBooks()
    },


  }
</script>

<style lang="scss" scoped>
  @import "../common/style/adapter.config";
  #index {
    @include flex();
    box-shadow: 2px 10px 10px rgba(0,0,0,.2);
    border-radius: 5px;
    overflow: hidden;
    width: 90%;
    height: 90%;
    transition: all 0.25s;

    .index-item {
      width:0;
      @include flex-full();
      align-self: stretch;
    }

    .intro, .intro-main::before {
      background: url("/static/images/mainbg.jpg") 0 / cover fixed;
    }

    .intro {
      background: url("/static/images/mainbg.jpg") 0 / cover fixed;
      @include flex($al: center, $jc: center);

      .intro-main {

        position: relative;
        margin: 0 auto;
        padding: 1em;
        background: hsla(0,0%,100%,.25) border-box;
        overflow: hidden;
        border-radius: .3em;
        box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
        0 .5em 1em rgba(0, 0, 0, 0.6);
        text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
        width:80%;
        height:80%;
        z-index:0;
        @include flex(column, center, center);

        &::before {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          margin: -30px;
          z-index: -1;
          -webkit-filter: blur(20px);
          filter: blur(20px);

          /*background: red;*/
        }

        .main-avatar {
          width:80px;
          height:80px;
          background: url("/static/images/avatar2.jpg") no-repeat center center / cover;
          border-radius: 50%;
        }

        .main-title {

          color: #fff;
          font-family: TEXT_CONTENT,Cambria,"Cambaria Math","Times New Roman",VSung,serif;
          font-size: 40px;
          text-align: center;
          font-weight: bold;
          padding-top: 30px;

        }

        .main-tag {
          color: #352927;
          margin-top: 10px;
        }

        .main-desc {
          color: #ccc8c7;
          margin-top:20px;
        }
      }


    }

    .art-list {
      background: #fff;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      background: #fff url("/static/images/clara_cars.png") no-repeat center center / 200px;
      .art-item {
        padding: 40px 50px;
        display: block;
        padding-left: 150px;
        margin: 20px;
        position: relative;
        transition: padding 0.15s cubic-bezier(0.4, 0, 0.2, 1),margin 0.15s cubic-bezier(0.4, 0, 0.2, 1),box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
          cursor: pointer;

          box-shadow:0 37.125px 70px -12.125px rgba(0,0,0,0.3);
          /*padding:6px 10px;*/

          .art-button {
            animation-timing-function: ease-in-out;

            color: #70aeec;
            animation-name: bounds-animation;
            animation-duration: 0.25s;
          }
        }

        .art-thumb {
          position: absolute;
          left: 50px;
          top:50px;
          height:80px;
          width:80px;
          background: none no-repeat 0 0 / cover;
        }
        .art-date-wrap {
          font-family: TEXT_CONTENT,Cambria,"Cambaria Math","Times New Roman",VSung,serif;
          font-size: 14px;
          color: #6a747b;
          font-weight: bold;
          margin-bottom: 8px;

          > i {
            color: #f6ae39;
            font-size: inherit;
          }
        }

        .art-title {
          font-size: 20px;
          color: #23333d;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .art-desc {
          font-size: 14px;
          color: #88918f;
          margin-bottom: 10px;
        }

        .art-button {
          font-size: 13px;
          display: inline-block;
          color: #afb9b7;
          font-weight: bold;
          transition: all 0.2s;
        }
      }
    }
  }

  @media (max-width:640px) {
    #index {
      width:100%;
      height: 100%;
      border-radius: 0;
      @include flex(column);

      .index-item {
        height:0;
        width:100%;
        @include flex-full();
      }
    }
  }

  @keyframes bounds-animation {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    50% {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }

    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
