<template>
  <div class="grid-center">
    <grid>
      <grid-item :link="{name: 'history'}">
        <span slot="icon" class="iconfont icon-compass"></span>
        <span slot="label">历史上的今天</span>
      </grid-item>
      <grid-item :link="{name: 'qrcode'}">
        <span slot="icon" class="iconfont icon-qrcode"></span>
        <span slot="label">二维码生成</span>
      </grid-item>
      <grid-item :link="{name: 'qqTest'}">
        <span slot="icon" class="iconfont icon-appstore"></span>
        <span slot="label">QQ号码测吉凶</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
</script>

<style scoped>
.grid-center {
  text-align: center;
}
</style>
