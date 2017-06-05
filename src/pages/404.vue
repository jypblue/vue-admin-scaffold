<template>
  <div>
    <div class="col-md-12 page-404">
      <div class="number">
        404
      </div>
      <div class="details">
        <h3>哎呀！你迷路了。</h3>
        <p>
          我们找不到你要找的那个页面了。
        <span>{{ number }}</span>秒后自动返回首页。
        </p>
        <div class="back-home" @click="backHome">返回首页</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'page-404',
    data() {
      return {
        number: 6,
      };
    },
    methods: {
      count() {
        const countdown = () => {
          let bh = null;
          if (this.number === 0) {
            clearTimeout(bh);
            this.$router.push({ path: '/' });
          } else {
            this.number--;
          }
          bh = setTimeout(countdown, 1000);
        };
        countdown();
      },
      backHome() {
        this.$router.push({ path: '/' });
      },
    },
    mounted() {
      this.count();
    },
  };
</script>
<style lang="scss">
  @import '../scss/pages/error.scss';
</style>
