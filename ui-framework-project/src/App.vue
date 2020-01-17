<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item :link="{name: 'home'}">
        <span slot="icon" class="iconfont icon-bulb"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'laboratory'}">
        <span slot="icon" class="iconfont icon-experiment"></span>
        <span slot="label">实验室</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'about'}">
        <span slot="icon" class="iconfont icon-deploymentunit"></span>
        <span slot="label">关于</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
