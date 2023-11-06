<script setup>
import { reactive, onMounted } from "vue";
let t = null;
let showTime = reactive({
  leftTime: getdate(true),
  rightTime: getdate(false),
});

function time() {
  clearTimeout(t);
  showTime.leftTime = getdate(true);
  showTime.rightTime = getdate(false);
  t = setTimeout(time, 1000);
}

function getdate(choice) {
  let d = new Date();
  if (choice)
    return (
      d.getFullYear() +
      "年" +
      (d.getMonth() + 1 + "").padStart(2, 0) +
      "月" +
      (d.getDate() + "").padStart(2, 0) +
      "日"
    );
  else
    return (
      ("" + d.getHours()).padStart(2, 0) +
      ":" +
      (d.getMinutes() + "").padStart(2, 0) +
      ":" +
      ("" + d.getSeconds()).padStart(2, 0)
    );
}

onMounted(() => {
  t = setTimeout(time, 1000);
});
</script>

<template>
  <img src="../assets/images/header.png" alt="header" />
  <div class="out">
    <div class="btime">{{ showTime.leftTime }}</div>
    <div class="system">智慧城管系统</div>
    <div class="btime">{{ showTime.rightTime }}</div>
  </div>
</template>

<style lang="less" scoped>
.out {
  width: 100%;
  height: 36px;
  position: absolute;
  top: 12px;
  display: flex;
  left: 0;
  right: 0;
  justify-content: space-evenly;
  align-items: center;

  .btime {
    margin-top: 5px;
    width: 20%;
    line-height: 40px;
    font-size: 18px;
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    letter-spacing: 2px;
  }

  .system {
    margin: 0 150px;
    width: 40%;
    text-align: center;
    font-size: 33px;
    font-weight: bold;
    // background-image: -webkit-linear-gradient(
    //   bottom,
    //   rgba(255, 255, 255, 0.5),
    //   rgba(255, 255, 255, 1)
    // );
    // background: linear-gradient(to right, #ffffff, #1f4a93, #ffffff);
    letter-spacing: 4px;
    -webkit-animation: maskedAnimation 4s infinite linear;
    background-image: -webkit-linear-gradient(
      left,
      #022858,
      #fff 25%,
      #022858 50%,
      #fff 75%,
      #022858
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
  }
}
@keyframes maskedAnimation {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100% 0;
  }
}
img {
  margin-top: -15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
