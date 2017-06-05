<template>
  <li :class="{
    'sd-submenu': true,
    'active': active,
    'open': opened
  }">
    <a class="sd-submenu-title" ref="submenu-title">
    <slot name="title"></slot>
    <span :class="{
      'arrow': true,
      'open': opened
    }">
    </span>
    </a>
      <ul class="sub-menu" v-show="opened">
        <slot></slot>
      </ul>
  </li>
</template>
<script>
  import menuMixin from './menu-mixin.js'
  import Emitter from 'packages/mixins/emitter.js'

  export default {
    name: 'SdSubmenu',
    componentName: 'SdSubmenu',
    mixins: [menuMixin, Emitter],
    props: {
      index: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        timeout: null,
        items: {},
        submenus: {}
      }
    },
    computed: {
      opened () {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1
      },
      active: {
        cache: false,
        get () {
          let isActive = false
          const submenus = this.submenus
          const items = this.items
          Object.keys(items).forEach(index => {
            if (items[index].active) {
              isActive = true
            }
          })

          Object.keys(submenus).forEach(index => {
            if (submenus[index].active) {
              isActive = true
            }
          })

          return isActive
        }
      }
    },
    methods: {
      addItem (item) {
        this.$set(this.items, item.index, item)
      },
      removeItem (item) {
        delete this.items[item.index]
      },
      addSubmenu (item) {
        this.$set(this.submenus, item.index, item)
      },
      removeSubmenu (item) {
        delete this.submenus[item.index]
      },
      handleClick () {
        this.dispatch('SdMenu', 'submenu-click', this)
      },
      handleMouseenter () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath)
        }, 300)
      },
      handleMouseleave () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index, this.indexPath)
        }, 300)
      },
      initEvents () {
        let {
          // rootMenu,
          // handleMouseenter,
          // handleMouseleave,
          handleClick
        } = this
        let triggerSd

        triggerSd = this.$refs['submenu-title']
        triggerSd.addEventListener('click', handleClick)
      }
    },
    created () {
      this.parentMenu.addSubmenu(this)
      this.rootMenu.addSubmenu(this)
    },
    beforeDestroy () {
      this.parentMenu.removeSubmenu(this)
      this.rootMenu.removeSubmenu(this)
    },
    mounted () {
      this.initEvents()
    }
  }

</script>
