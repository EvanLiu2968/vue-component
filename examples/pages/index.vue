<style scoped>
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 20px;

    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }

    p {
      font-size: 18px;
      line-height: 28px;
      color: #888;
      margin: 10px 0 5px;
    }
  }
  .sponsors {
    display: flex;
    justify-content: center;
  }
  .sponsor {
    margin: 0 20px 50px;
    display: inline-flex;
    width: 300px;
    height: 100px;
    justify-content: center;

    p.tips {
      margin: 10px;
      line-height: 1.8;
      color: #999;
      font-size: 30px;
      text-align: center;
    }
  }

  @media (max-width: 1000px) {
    .banner .container {
      img {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .banner-stars {
      display: none;
    }
    .banner-desc {
      #line2 {
        display: none;
      }
      h2 {
        font-size: 32px;
      }
      p {
        width: auto;
      }
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-desc">
        <h1>A Desktop UI Library</h1>
        <p>Element, a Vue 2.0 based component library for developers, designers and product managers</p>
      </div>
    </div>
    <div class="sponsors">
      <p class="tips">Welcome！</p>
    </div>
  </div>
</template>
<script>
  import { Hover } from 'perspective.js';

  export default {
    data() {
      return {
        lang: this.$route.meta.lang
      };
    },
    mounted() {
      new Hover('.jumbotron', { // eslint-disable-line
        max: 3,
        scale: 1,
        perspective: 700,
        layers: [{
          multiple: 0.01,
          reverseTranslate: true
        }, {
          multiple: 0.02,
          reverseTranslate: true
        }]
      });
    }
  };
</script>
