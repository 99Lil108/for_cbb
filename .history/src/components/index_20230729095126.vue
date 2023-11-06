<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const demo = ref();
onMounted(() => {
  var myChart = echarts.init(demo.value);
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
</script>

<template>
  <div id="d1" ref="demo"></div>
</template>

<style scoped lang="less">
#d1 {
  width: 400px;
  height: 400px;
}
</style>
