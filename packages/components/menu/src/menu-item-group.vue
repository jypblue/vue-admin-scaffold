<template>
  <li class="page-sidebar-menu-group">
    <div class="heading">
      <template v-if="!$slots.title">
        {{title}}
      </template>
      <slot v-else name="title">
      </slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'SdMenuItemGroup',
    componentName: 'SdMenuItemGroup',
    props: {
      title: {
        type: String
      }
    }
  }
</script>
