<template>
  <div>
    <datetime-view v-model="value" ref="datetime" :format="format"></datetime-view>
    <p class="info">选中值: {{ value }}</p>
    <div class="btn-padding">
      <x-button type="primary" @click.native="watchHistory">查看历史上的今天</x-button>
    </div>
    <panel header="历史上的今天" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { getHistory } from '_ser/moduleB';

export default {
  data() {
    return {
      value: '04-16',
      format: 'MM-DD',
      list: []
    };
  },
  methods: {
    async watchHistory() {
      let data = this.value.split('-');

      this.list = [];

      const result = await getHistory({
        v: '1.0',
        month: data[0],
        day: data[1],
        key: '' // 填写你自己的 AppKey
      });

      console.log(result);

      // .then(response => {
      //   if (!response.error_code) {
      //     response.result.map(e => {
      //       this.list.push({
      //         title: e.title,
      //         desc: e.des,
      //         src: e.pic
      //       });
      //     });
      //   }
      // });
    }
  }
};
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}

.btn-padding {
  padding: 15px;
}
</style>
