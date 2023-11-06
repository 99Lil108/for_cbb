<script setup>
import { useStore } from "vuex";
const store = useStore();
const format_N = (num) => {
  if (num < 10) return "000" + num;
  else if (num < 100) return "00" + num;
  else if (num < 1000) return "0" + num;
  else return num + "";
};
</script>

<template>
  <div class="wrap">
    <div
      class="item"
      v-for="(key, index) in Object.keys(store.state.proObj)"
      :key="index"
    >
      <div class="t">{{ store.state[key].item }}</div>
      <div class="num">
        <div
          class="digit"
          v-for="(i, ix) in format_N(store.state[key].num)"
          :key="ix"
        >
          {{ i }}
        </div>
      </div>
      <div class="unit">{{ store.state[key].unit }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 68px;
  margin-top: -20px;
  display: flex;
  flex-flow: wrap;
  padding: 7px 0;
  @font-face {
    font-family: digits;
    src: url(../../assets/font/DigifaceWide.ttf);
  }

  .item {
    flex: 0 1 25%;
    color: #3776d8;
    letter-spacing: 3px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    height: 34px;
    align-items: center;
    line-height: 34px;

    .t {
      width: 47%;
      text-align: right;
      margin-right: 10px;
    }
    .num {
      width: 24%;
      display: flex;
      align-items: center;
      flex-grow: 0;
      height: 34px;

      .digit {
        margin: 5px 0;
        padding-left: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 27px;
        color: #00ced5;
        font-size: 18px;
        font-family: digits;
        font-weight: 0;
        background: url(../../assets/images/numbk.png);
        background-size: 100% 100%;
      }
    }
    .unit {
      width: 10%;
      text-align: center;
    }
  }
}
</style>
