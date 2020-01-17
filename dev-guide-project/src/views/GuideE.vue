<template>
  <div class="GuideE">
    <h1>开发指南篇 5：Vue API 盲点解析</h1>
    <button @click="doSomething">获取异常</button>
    <ul ref="box">
      <li v-for="(item, index) in arr" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GuideE',
  data: () => ({
    arr: []
  }),
  mounted() {
    this.getData();
  },
  methods: {
    doSomething() {
      console.log(a); // a is not defined
    },
    // getData() {
    //   this.arr = [1, 2, 3];
    //   this.$nextTick(() => {
    //     this.$refs.box.getElementsByTagName('li')[2].innerHTML = 'hello';
    //   });
    // },
    async getData() {
      this.arr = [1, 2, 3];
      await this.$nextTick();
      this.$refs.box.getElementsByTagName('li')[2].innerHTML = 'hello';
    }
  }
};
</script>
