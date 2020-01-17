<template>
  <div class="my-component">
    <span>{{ data }}</span>
    <slot name="customize"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    data: String
  }
}
</script>
