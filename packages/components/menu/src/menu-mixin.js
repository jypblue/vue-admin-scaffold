export default {
  computed: {
    indexPath () {
      var path = [this.index]
      var parent = this.$parent
      while (parent.$options.componentName !== 'SdMenu') {
        if (parent.index) {
          path.unshift(parent.index)
        }
        parent = parent.$parent
      }
      return path
    },
    rootMenu () {
      var parent = this.$parent
      while (
        parent &&
        parent.$options.componentName !== 'SdMenu'
      ) {
        parent = parent.$parent
      }
      return parent
    },
    parentMenu () {
      let parent = this.$parent
      while (
        parent &&
        ['SdMenu', 'SdSubmenu'].indexOf(parent.$options.componentName) === -1
      ) {
        parent = parent.$parent
      }
      return parent
    }
  }
}
