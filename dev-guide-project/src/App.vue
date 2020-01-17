<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/guide-a">开发指南篇1</router-link>|
      <router-link to="/guide-b">开发指南篇2</router-link>|
      <router-link to="/guide-c">开发指南篇3</router-link>|
      <router-link to="/guide-d">开发指南篇4</router-link>|
      <router-link to="/guide-e">开发指南篇5</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
