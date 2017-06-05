<template>
  <div class="page-sidebar-wrapper">
     <!--折叠添加in-->
    <div class="page-sidebar navbar-collapse" :class="{ 'in': isIn }">

      <!--折叠添加page-sidebar-menu-closed-->
      <ul class="page-sidebar-menu" :class="{'page-sidebar-menu-closed': isClose }">
        <!--sidemenu 折叠 button-->
        <li class="sidebar-toggler-wrapper">
          <div class="sidebar-toggler" v-on:click="sidebarToggler">
            <i class="fa fa-align-justify"></i>
          </div>
        </li>
        <li class="sidebar-search-wrapper">
        </li>
      </ul>
        <sd-menu :default-active="$route.path" :class="{'page-sidebar-menu-closed': isClose }" unique-opened router>
          <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
            <sd-submenu :index="index+''" v-if="!item.noChild">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span class="title">{{item.menuName}}</span>
              </template>
              <template v-for="(child,sindex) in item.children">
                <!--二级-->
                <sd-menu-item  :index="child.path" v-if="!child.children && !child.hidden" :key="sindex">
                  <a><span class="title">{{child.menuName}}</span></a>
                </sd-menu-item>
                <!--三级-->
                <!--
                <sd-submenu :index="index+'-'+ sindex" v-if="child.children && !child.hidden && !child.noChild">
                  <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span class="title">{{item.name}}</span>
                  </template>
                  <sd-menu-item v-for="(gdChild,gdindex) in child" :index="gdChild.path" v-if="!gdchild.hidden">

                  </sd-menu-item>
                </sd-submenu>

                -->
              </template>
            </sd-submenu>
            <sd-menu-item v-if="item.noChild&&item.children.length>0" :index="item.children[0].path">
              <a>
              <i :class="item.iconCls"></i>
              <span class="title">{{item.children[0].menuName}}</span>
              </a>
            </sd-menu-item>
          </template>
        </sd-menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sidebar',
    props: ['isIn'],
    data () {
      return {
        openIndex: 0,
        isClose: false
      }
    },
    methods: {
      sidebarToggler () {
        this.isClose = !this.isClose
        this.$emit('is-close', this.isClose)
      },
      isOpen (index) {
        return index === this.openIndex
      },
      openToggler (index) {
        if (this.openIndex === index) {
          this.openIndex = 0
        } else {
          this.openIndex = index
        }
      }
    },
    mounted () {
        // console.log(this.$router.options.routes);
    },
    beforeDestroy () {
    }
  }
</script>
<style lang="scss">

</style>
