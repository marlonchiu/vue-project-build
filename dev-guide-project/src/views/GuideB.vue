<template>
  <div class="GuideB">
    <h1>开发指南篇 2：学会编写可复用性模块</h1>
    <ul>
      <li>封装成一个函数 --- 过滤器的灵活使用</li>
      <li>封装成一个组件 --- 插槽</li>
      <li>封装成一个插件 --- install 插件</li>
    </ul>
    <div>
      <input type="text" v-model="str1">
      <input type="text" v-model="str2">
      <div>{{ str1 | sliceUpperCase }}</div>
      <div>{{ str2 | sliceUpperCase }}</div>
    </div>
    <div>
      <my-component data="我是父组件传入子组件的数据">
        <template slot="customize">
          <span>这是定制化的数据</span>
        </template>
      </my-component>
    </div>
    <button @click="openToast">打开toast</button>
  </div>
</template>

<script>
import MyComponent from '../components/my-component';
export default {
  name: 'GuideB',
  data: () => ({
    str1: '',
    str2: ''
  }),
  methods: {
    // sliceUpperCase(val) {
    //   return val.slice(1).toUpperCase();
    // }
    openToast() {
      this.$toast('Hello World', 2000);
    }
  },
  // filters: {
  //   sliceUpperCase(val) {
  //     return val.slice(1).toUpperCase();
  //   }
  // },
  components: {
    MyComponent
  }
};
</script>
