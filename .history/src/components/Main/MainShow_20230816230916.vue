<script setup></script>

<template>
  <div class="wrap">
    <div class="title">市政监控</div>
    <div class="main">
      <!-- <CarShow></CarShow> -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  margin: 6.5px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/map.png) center no-repeat;
  background-size: 100% 100%;
  .title {
    padding-top: 4px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: #17caf0;
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    // align-items: center;
    justify-content: center;
  }
}
</style>
