<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item :link="{name: 'index'}">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'home'}">
        <span slot="label">实验室</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'about'}">
        <span slot="label">关于</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
