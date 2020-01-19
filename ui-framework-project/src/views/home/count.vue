<template>
  <div class="count">
    <group>
      <x-input title="text值为" type="text" :placeholder="getText" :disabled="true">
        <x-button slot="right" type="primary" @click.native="setText" mini>修改text值</x-button>
      </x-input>
    </group>
    <group>
      <x-input title="groups值为" type="text" :placeholder="String(getGroups)" :disabled="true">
        <x-button
          slot="right"
          type="primary"
          @click.native="setGroup(getGroups.length + 1)"
          mini
        >修改groups值</x-button>
      </x-input>
    </group>
    <group>
      <x-input title="http数据" type="text" :placeholder="dataStatus" :disabled="true">
        <x-button slot="right" type="primary" @click.native="getHttpData" mini>获取github数据</x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getTestData } from '@/services/moduleA';
export default {
  name: 'Count',
  data: () => ({
    dataStatus: '未获取'
  }),
  computed: {
    ...mapGetters(['getText', 'getGroups'])
  },
  methods: {
    ...mapActions([
      'setText', // 将 `this.setText()` 映射为 `this.$store.dispatch('setText')`
      'setGroup'
    ]),
    async getHttpData() {
      const result = await getTestData();
      console.log(result);
      this.dataStatus = '获取成功';
    }
  }
};
</script>

<style scoped>
button {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
