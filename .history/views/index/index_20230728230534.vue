<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const demo = ref();
onMounted(() => {
  var myChart = echarts.init(demo.value);

  // 指定图表的配置项和数据
  var option = {};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
</script>

<template>
  <div id="d1">1234</div>
</template>

<style scoped lang="less">
#d1 {
  width: 1000px;
  height: 1000px;
}
</style>
