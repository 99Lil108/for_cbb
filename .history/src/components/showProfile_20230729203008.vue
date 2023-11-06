<script setup>
import { reactive } from "vue";
const pro_list = reactive([
  {
    item: "机动车违规停放",
    num: 1314,
    unit: "辆",
  },
]);
</script>

<template>
  <div class="wrap"></div>
</template>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 120px;
  margin-top: -25px;
}
</style>
