<template>
  <div class="qrcode">
    <group>
      <x-input title="二维码内容" v-model="content" placeholder="Hello World"></x-input>
    </group>
    <div class="btn-padding">
      <x-button type="primary" @click.native="getQrcode">生成二维码</x-button>
    </div>
    <div class="grid-center">
      <img :src="'data:image/png;base64,' + imgUrl" alt>
    </div>
  </div>
</template>

<script>
import { getQrcodeApi } from '_ser/moduleB';
export default {
  data() {
    return {
      content: 'Hello World',
      imgUrl: ''
    };
  },
  methods: {
    async getQrcode() {
      const response = await getQrcodeApi({
        text: this.content,
        key: 'd6ceaf9be9f116ae45e7699845d87056' // 填写你自己的 AppKey
      });
      console.log(response);
      const { reason, result, error_code } = response;
      if (!error_code) {
        this.imgUrl = result.base64_image;
      } else {
        this.$vux.toast.text(reason, 'default')
      }
    }
  }
};
</script>

<style scoped>
.btn-padding {
  padding: 15px;
}
.grid-center {
  text-align: center;
}
</style>
