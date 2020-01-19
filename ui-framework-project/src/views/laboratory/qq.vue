<template>
  <div class="qq">
    <group>
      <x-input title="QQ号码" v-model="qq"></x-input>
    </group>
    <div class="btn-padding">
      <x-button type="primary" @click.native="startTest">开始测试</x-button>
    </div>
    <group>
      <x-input placeholder="总结" v-model="conclusion"></x-input>
      <x-textarea name="description" v-model="analysis" placeholder="分析"></x-textarea>
    </group>
  </div>
</template>

<script>
import { getQQApi } from '_ser/moduleB';
export default {
  data() {
    return {
      qq: '123456789',
      conclusion: '',
      analysis: ''
    };
  },
  methods: {
    async startTest() {
      const response = await getQQApi({
        qq: this.qq,
        key: 'd6ceaf9be9f116ae45e7699845d87056' // 填写你自己的 AppKey
      });

      const { reason, result, error_code } = response;
      if (!error_code) {
        let { conclusion, analysis } = result.data;
        this.conclusion = conclusion;
        this.analysis = analysis;
      } else {
        this.$vux.toast.text(reason, 'bottom');
      }
      // .then(response => {
      //   if (!response.error_code) {
      //     let data = response.result.data;
      //     this.conclusion = data.conclusion;
      //     this.analysis = data.analysis;
      //   }
      // });
    }
  }
};
</script>

<style scoped>
.btn-padding {
  padding: 15px;
}
</style>
