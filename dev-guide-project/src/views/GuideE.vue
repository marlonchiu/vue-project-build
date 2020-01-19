<template>
  <div class="GuideE">
    <h1>开发指南篇 5：Vue API 盲点解析</h1>
    <ul>
      <li>使用 performance 开启性能追踪</li>
      <li>使用 errorHandler 来捕获异常</li>
      <li>使用 nextTick 将回调延迟到下次 DOM 更新循环之后执行</li>
      <li>使用 watch 的深度遍历和立即调用功能</li>
      <li>对低开销的静态组件使用 v-once</li>
      <li>使用 $isServer 判断当前实例是否运行于服务器</li>
    </ul>
    <button @click="clickButton">获取异常</button>
    <ul ref="box" id="box">
      <li v-for="(item, index) in arr" :key="index"></li>
    </ul>
    <button @click="obj.a = 2">修改</button>
  </div>
</template>

<script>
export default {
  name: 'GuideE',
  data: () => ({
    arr: [],
    obj: {
      a: 1
    }
  }),
  mounted() {
    this.getData();
    this.mutationObserverFn();

    /**
     * 当我们访问 $isServer 属性时，其会调用 isServerRendering 方法，
     * 该方法会首先判断当前环境，如果在浏览器或者 Weex 下则返回 false，
     * 否则继续判断当前全局环境下的 process.env.VUE_ENV 是否为 server 来返回最终结果
     */
    if (this.$isServer) {
      document.title = 'test';
    }
  },
  methods: {
    clickButton() {
      this.arr = [1, 9, 3, 5, 7];
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
    },
    // MutationObserver 呢？用一句话介绍就是：
    // 我们可以使用它创建一个观察者对象，其会监听某个 DOM 元素，
    // 并在它的 DOM 树发生变化时执行我们提供的回调函数
    mutationObserverFn() {
      // 传入回调函数进行实例化
      var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          console.log(mutation.type);
        });
      });

      // 选择目标节点
      var target = document.querySelector('#box');

      // 配置观察选项
      var config = {
        attributes: true, // 是否观察属性的变动
        childList: true, // 是否观察子节点的变动（指新增，删除或者更改）
        characterData: true // 是否观察节点内容或节点文本的变动
      };

      // 传入目标节点和观察选项
      observer.observe(target, config);

      // 停止观察
      // observer.disconnect();
    }
  },
  watch: {
    obj: {
      handler(newVal, oldVal) {
        console.log(newVal);
      },
      deep: true,
      immediate: true // 第一次加载的时候就调用,会立即以 obj 的当前值触发回调
    }
  }
};
</script>
