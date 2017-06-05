<template>
  <li class="sd-menu-item"
    @click="handleClick"
    :class="{
      'active': active,
      'disabled': disabled
    }">
    <slot></slot>
  </li>
</template>
<script>
  import Menu from './menu-mixin.js'
  import Emitter from 'packages/mixins/emitter.js'

  export default {
    name: 'SdMenuItem',

    componentName: 'SdMenuItem',

    mixins: [Menu, Emitter],

    props: {
      index: {
        type: String,
        required: true
      },
      route: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      active () {
        return this.index === this.rootMenu.activedIndex
      }
    },
    methods: {
      handleClick () {
        this.dispatch('SdMenu', 'item-click', this)
        this.$emit('click', this)
      }
    },
    created () {
      this.parentMenu.addItem(this)
      this.rootMenu.addItem(this)
    },
    beforeDestroy () {
      // this.parentMenu.removeItem(this);
      // this.rootMenu.removeItem(this);
    }
  }
</script>
