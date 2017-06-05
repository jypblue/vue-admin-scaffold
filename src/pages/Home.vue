<template>
   <!--折叠添加class=>page-sidebar-closed | page-header-fixed-->
    <div class="page-app" id="container" :class="{ 'page-sidebar-closed': isClose }">
      <!--
      <headerlayout v-on:is-in="togglerIn"></headerlayout>
      -->
      <headerlayout></headerlayout>
      <div class="clearfix"></div>
      <div class="page-container">
        <!--sidebar-->
        <sidebar :is-in="sidebar.opened" v-on:is-close="toggler" ref="sidebar"></sidebar>
        <!--content-->
        <div class="page-content-wrapper">
          <div class="page-content">
            <levelbar></levelbar>
            <!--页面主体内容，可自定义子路由添加组件或者直接在这儿写页面-->
            <router-view></router-view>
          </div>
        </div>

      </div>
      <footerlayout></footerlayout>
    </div>
</template>
<script>
import headerlayout from '../components/layout/_header.vue'
import footerlayout from '../components/layout/_footer.vue'
import sidebar from '../components/layout/_sidebar.vue'
import levelbar from '../components/layout/_levelbar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home-page',
  data () {
    return {
      image: '',
      isClose: false,
      isIn: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggler (close) {
      this.isClose = close
    },
    togglerIn (isIn) {
      this.isIn = isIn
    }
  },
  components: {
    headerlayout,
    footerlayout,
    sidebar,
    levelbar
  },
  mounted () {
    // 可以获得子组件的引用
    this.$refs.sidebar.$on('is-close', function (isclose) { // eslint-disable-line
    })
  }
}
</script>
<style lang="scss">

</style>
