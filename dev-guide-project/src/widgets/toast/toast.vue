<template>
  <div class="toast-component" v-if="isShow">{{text}}</div>
</template>
<script>
export default {
  props: {
    isShow: Boolean,
    text: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-component {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-120px, -30px);
  z-index: 1000;
  width: 240px;
  height: 60px;
  background: rgba(149, 149, 149, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
</style>
