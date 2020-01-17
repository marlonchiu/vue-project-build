<template>
  <div class="GuideD">
    <h1>开发指南篇 4：数据驱动与拼图游戏</h1>
    <ul class="puzzle-wrap">
      <li
        :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
        v-for="(puzzle, index) in puzzles"
        :key="index"
        v-text="puzzle"
        @click="moveFn(index)"
      ></li>
    </ul>
    <button class="btn-reset" @click="renderFn">重置游戏</button>
  </div>
</template>

<script>
export default {
  name: 'GuideD',
  data: () => ({
    puzzles: []
  }),
  mounted() {
    this.renderFn();
  },
  methods: {
    // 重置渲染
    renderFn() {
      let puzzleArr = Array.from({ length: 15 }, (value, index) => index + 1);
      // 页面显示
      // this.puzzles = puzzleArr;
      this.puzzles = this.shuffle(puzzleArr);
      this.puzzles.push('');
    },
    // 随机打乱数组
    shuffle(arr) {
      // !TODO  为什么不用 sort 排序
      // JavaScript 内置排序算法的缺陷性，
      // 使用 sort 排序的结果并不随机分布，
      // 经过大量的测试你会发现越大的数字出现在越后面的概率越大。
      let len = arr.length;
      for (let i = 0; i < len - 1; i++) {
        let idx = Math.floor(Math.random() * (len - i));
        let temp = arr[idx];
        arr[idx] = arr[len - i - 1];
        arr[len - i - 1] = temp;
      }

      return arr;
    },
    // 点击方块
    // 当我们点击方块，如果其上下左右存在为空的格子就需要将其进行交换，
    // 而由于是数据驱动界面，这里我们便需要交换两者在数组中的位置来实现
    moveFn(index) {
      let puzzles = this.puzzles;
      // 获取点击位置上下左右的值
      let leftNum = this.puzzles[index - 1],
        rightNum = this.puzzles[index + 1],
        topNum = this.puzzles[index - 4],
        bottomNum = this.puzzles[index + 4];
      // 和为空的位置交换数值
      /**
       * 考虑边界情况，比如第 4 个格子为空，我们点击第 5 个格子不应该交换它们，
       * 因为在界面上第 4 个格子不在第 5 个格子的左侧，
       * 所以我们使用 index % 4 的方法来进行边界的判断，
       * 同时使用 Vue 提供的 $set 方法来将响应属性添加到数组上。
       */
      if (leftNum === '' && index % 4) {
        this.setPuzzle(index, -1);
      } else if (rightNum === '' && 3 !== index % 4) {
        this.setPuzzle(index, 1);
      } else if (topNum === '') {
        this.setPuzzle(index, -4);
      } else if (bottomNum === '') {
        this.setPuzzle(index, 4);
      }

      this.passFn();
    },
    // 设置数组值
    setPuzzle(index, num) {
      let curNum = this.puzzles[index];
      this.puzzles[index + num] = curNum;
      this.puzzles[index] = '';
      // 迫使 Vue 实例重新渲染
      this.$forceUpdate();

      /**
       * 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
       * - 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
       * - 当你修改数组的长度时，例如：vm.items.length = newLength
       *
       * 使用的便是第一种利用索引的方式，由于 Vue 检测不到数组变动，因此页面便无法重绘。
       * 同样 Vue 也不能检测对象属性的添加或删除，
       * 需要使用 Vue.set(object, key, value) 方法来实现
       */

      // this.$set(this.puzzles, index + num, curNum);
      // this.$set(this.puzzles, index, '');
    },
    // 校验游戏是否过关，
    // 只需要在最后一个格子为空时去进行校验即可
    passFn() {
      if (this.puzzles[15] === '') {
        let newPuzzles = this.puzzles.slice(0, 15);
        // 使用数组的 every 方法来简化代码的复杂度，当所有数字大小和对应的数组下标 + 1 相吻合时即会返回 true
        let isPass = newPuzzles.every((e, i) => e === i + 1);
        if (isPass) {
          alert('恭喜，闯关成功！');
        }
      }
    }
  }
};
</script>

<style lang="scss">
.puzzle-wrap {
  width: 328px;
  height: 328px;
  padding: 0;
  margin: 50px auto 0;
  background: #ccc;
  list-style: none;
}
.puzzle {
  float: left;
  width: 80px;
  height: 80px;
  font-size: 20px;
  background: #f90;
  text-align: center;
  line-height: 80px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px;
}
.btn-reset {
  cursor: pointer;
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  text-align: center;
  border-radius: 5px;
  border: none;
  background: #ccc;
}
</style>
