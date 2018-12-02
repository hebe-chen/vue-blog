<template>
  <div id="index" v-if="book">

    <div class="intro index-item" :style="{backgroundImage: 'url(' + book.thumb + ')'}">
      <div class="cover"  :style="{backgroundImage: 'url(' + book.thumb + ')'}"></div>

      <div class="intro-main">

        <div class="detail-nav">
          <a class="back-btn" @click="$router.go(-1)"></a>
        </div>
      </div>

    </div>

    <ul class="art-list index-item">
      <router-link :to="'/article/' + item.id" class="art-item" v-for="item in chapters">
        <div class="art-date-wrap">{{item.date_publish}} · <i>{{book.name}}</i></div>
        <h3 class="art-title">{{item.title}}</h3>
        <p class="art-desc">{{item.desc}}</p>
        <router-link class="art-button" to="/article/100">READ</router-link>
      </router-link>
    </ul>

  </div>
</template>

<script>
  import http from '../common/js/http'

  export default {
    name: 'chapter',

    data() {
      return {
        book: null,
        chapters: []
      }
    },
    methods: {
        getChapters() {
          http.get(this.$http, 'chapters', {id: this.$route.params['id']}, (res) => {
            this.chapters = res.chapters;
          })
        },

        getBook() {
          http.get(this.$http, 'books', {id: this.$route.params['id']}, (res) => {
            this.book = res.book;
          })
        }
    },

    mounted() {
      this.getBook()
      this.getChapters()
    }
  }
</script>

<style lang="scss" scoped>

  .back-btn {
    width:50px;
    height:50px;
    border-radius: 50%;
    background: #fff url("/static/images/back-icon.png") no-repeat center center / 40px;
    display: block;
    cursor: pointer;
    box-shadow: 0 0 10px #fff;

    &:hover {
      box-shadow: inset 0 0 5px #000;
    }
  }

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

    .intro, .cover {
      background: url("/static/images/macbookb.png") no-repeat center center / cover;

    }

    .cover {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: 0;
      -webkit-filter: blur(10px);
      filter: blur(10px);
    }
    .intro {
      position: relative;
      @include flex($al: center, $jc: center);
      z-index: 0;

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
        width:100%;
        height:100%;
        z-index:0;
        @include flex(column, center, center);

        &::before {
          content: '';
          /*background: red;*/
        }

        .main-avatar {
          width:80px;
          height:80px;
          background: url("/static/images/default_icon.jpeg") no-repeat center center / cover;
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
      .art-item {
        padding: 50px;
        padding-bottom: 0;
        display: block;

        &:hover {
          cursor: pointer;
          .art-button {
            animation-timing-function: ease-in-out;

            color: #70aeec;
            animation-name: bounds-animation;
            animation-duration: 0.25s;
          }
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
