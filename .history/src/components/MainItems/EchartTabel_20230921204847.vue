<script setup>
import { useStore } from "vuex";
import * as echarts from "echarts";
import {dv-loading} from "@dataview/datav-vue3";
import { defineProps, onMounted, ref } from "vue";
import { io } from "socket.io-client";
const store = useStore();
const props = defineProps({
  sx: {
    type: String,
    default: "",
  },
});
const echart = ref();
let myChart = {};
const url = "/show";
let socket = null;
onMounted(() => {
  myChart = echarts.init(echart.value, "dark");
  try {
    if (props.sx == "dljsjc") {
      socket = io(url);
      (() => {
        socket.on("connect", () => {
          socket.emit("apply", "t_" + props.sx);
        });
        socket.on("dataComing", (data) => {
          if (data.sx == props.sx) {
            store.commit(props.sx + "/update", data);
            myChart.setOption(store.state[props.sx].data);
          }
        });
      })();
    } else {
      myChart.setOption(store.state[props.sx].data);
    }
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      justify-content: center;
    "
    ref="echart"
  ></div>
</template>
