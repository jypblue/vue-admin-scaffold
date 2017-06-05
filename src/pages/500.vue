<template>
  <div>
    <div class="col-md-12 page-404">
      <div class="number">
        500
      </div>
      <div class="details">
        <h3>哎呀！有些事情出错了。</h3>
        <p>
          我们正在修复它，请一会儿回来。
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
    data () {
      return {
        number: 6
      }
    },
    methods: {
      count () {
        const countdown = () => {
          let bh = null
          if (this.number === 0) {
            clearTimeout(bh)
            this.$router.push({path: '/'})
          } else {
            this.number--
          }
          bh = setTimeout(countdown, 1000)
        }
        countdown()
      },
      backHome () {
        this.$router.push({path: '/'})
      }
    },
    mounted () {
      this.count()
    }
  }
</script>
<style lang="scss">
  @import '../scss/pages/error.scss';
</style>
