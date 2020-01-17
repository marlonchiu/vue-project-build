<template>
  <div class="GuideA">
    <h1>开发指南篇 1：从编码技巧与规范开始</h1>
    <ul>
      <li>使用对象代替 if 及 switch</li>
      <li>使用 Array.from 快速生成数组</li>
      <li>使用 router.beforeEach 来处理跳转前逻辑</li>
      <li>使用 v-if 来优化页面加载 ----- 涉及到权限问题的代码都需要使用 v-if</li>
      <li>路由跳转尽量使用 name 而不是 path ---- 配置的路由路径后期难免会进行修改</li>
      <li>使用 key 来优化 v-for 循环(推荐使用id 再次使用index)</li>
      <li>使用 computed 代替 watch --- 在处理多数据联动的情况下，使用 computed 会更加合理一点</li>
      <li>统一管理缓存变量</li>
      <li>使用 setTimeout 代替 setInterval --- setInterval 是经过该毫秒数将回调方法放置到队列中去</li>
      <li>不要使用 for in 循环来遍历数组</li>
    </ul>
    <div>
      姓：
      <input type="text" v-model="firstName">
      名：
      <input type="text" v-model="lastName">
      姓名：
      <span>{{ fullName }}</span>
      姓名2：
      <span>{{ fullName2 }}</span>
    </div>
  </div>
</template>

<script>
import { USER_NAME, TOKEN } from '../common/types';
export default {
  name: 'GuideA',
  data: () => ({
    firstName: '',
    lastName: '',
    fullName2: ''
  }),
  mounted() {
    // 使用对象代替 if 及 switch
    let name = 'lisi';
    let obj = {
      zhangsan: 21,
      lisi: 18,
      wangwu: 12
    };

    let age = obj[name] || 18;
    console.log(age);
    console.log(this.ceateArray());

    localStorage[USER_NAME] = '张三';
    sessionStorage[TOKEN] = '123';

    // 不要使用 for in 循环来遍历数组
    let arr = [1, 2];
    for (let key in arr) {
      console.log(arr[key]); // 会正常打印 1, 2
    }
    // 但是如果在 Array 原型链上添加一个方法
    Array.prototype.test = function() {};
    for (let key in arr) {
      console.log(arr[key]); // 此时会打印 1, 2, ƒ () {}
    }
  },
  methods: {
    // 使用 Array.from 快速生成数组
    ceateArray() {
      let hours = Array.from({ length: 24 }, (val, index) => index + '时');
      return hours;
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' . ' + this.lastName;
    }
  },
  watch: {
    firstName: function(newVal, oldVal) {
      this.fullName2 = newVal + ' ' + this.lastName;
    },
    lastName: function(newVal, oldVal) {
      this.fullName2 = this.firstName + ' ' + newVal;
    }
  }
};
</script>
