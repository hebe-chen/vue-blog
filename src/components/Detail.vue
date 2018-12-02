<template>
  <div id="detail">


    <div class="art-detail detail-item">
      <div class="detail-nav">
        <a class="back-btn" @click="$router.go(-1)"></a>

        <div class="markdown-title" v-if="chapter">
          {{chapter.title}}
        </div>
      </div>



      <div class="markdown-body" v-if="chapter">
        <vue-markdown v-highlight :source="chapter.content"></vue-markdown>
      </div>
    </div>


    <!--<div class="intro detail-item">-->

    <!--</div>-->

  </div>
</template>

<script>


  import http from '../common/js/http'
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'article',
    data() {
      return {
          chapter: null
      }
    },
    methods: {
      getChapter() {
        http.get(this.$http, 'chapters', {chapter_id: this.$route.params['id']}, (res) => {
          this.chapter = res.chapter;
        })
      },
    },

    mounted() {
        this.getChapter();
    },

    components: {
      VueMarkdown // 声明组件
    }

  }

</script>

<style lang="scss" scoped>
  @import "../common/style/adapter.config";

  .markdown-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-left: 30px;
    text-shadow: 5px 5px 5px lightgray;
  }
  .markdown-body {

    padding: 0 30px;

  }

  .back-btn {
    width:50px;
    height:50px;
    background: url("/static/images/back-icon.png") no-repeat center center / 40px;
    border-radius: 50%;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      margin-left: -5px;
    }
  }

  #detail {
    @include flex();
    box-shadow: 2px 10px 10px rgba(0,0,0,.2);
    border-radius: 5px;
    overflow: hidden;
    width: 90%;
    height: 90%;
    transition: all 0.25s;

    .detail-item {
      width:0;
      @include flex-full();
      align-self: stretch;
    }

    .intro, .intro-main::before {
      background: url("/static/images/macbookb.png") 0 / cover fixed;
    }

    .intro {
      background: url("/static/images/macbookb.png") 0 / cover fixed;
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

    .art-detail {
      background: #fff;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;

      .detail-nav {
        height: 60px;
        @include flex($al: center);
        padding-left: 20px;
      }
    }
  }

  @media (max-width:640px) {
    #detail {
      width:100%;
      height: 100%;
      border-radius: 0;
      @include flex(column);

      .detail-item {
        height:0;
        width:100%;
        @include flex-full();
      }

      .intro {
        display: none;
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
