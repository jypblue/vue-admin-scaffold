<template>
<div class="page-footer">
    <div class="page-footer-inner">
        {{ dateYear }} &copy; skysea offline product.
    </div>
    <div class="scroll-to-top">
      <i class="fa fa-arrow-up"></i>
    </div>
</div>
</template>
<script>
  export default {
    name: 'footerlayout',
    data () {
      return {
        dateYear: +new Date().getFullYear()
      }
    }
  }
</script>
<style lang="scss">

</style>
