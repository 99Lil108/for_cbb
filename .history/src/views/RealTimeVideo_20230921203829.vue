<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";
import io from "socket.io-client";
const data = reactive({
  restart: false,
  videoError: false,
  isLoading: true,
});
const imageElement = ref(null);
let socket = null;
function applyV() {
  if (socket) socket.emit("apply");
  data.restart = false;
}
onMounted(() => {
  socket = io("ws://127.0.0.1:5000/video");
  socket.on("videoComing", ({ img, errorExist, isEnding }) => {
    data.isLoading = false;
    if (errorExist) data.videoError = true;
    if (isEnding) data.restart = true;
    else imageElement.value.src = `data:image/png;base64,${img}`;
  });
  socket.on("ready", (_) => {
    data.isLoading = true;
    applyV();
  });
});
onUnmounted(() => {
  socket.emit("dis", "v_dljsjc");
  socket.disconnect();
});
</script>
<template>
  <div class="v" style="" v-if="data.isLoading"></div>
  <img ref="imageElement" class="v" />
  <div class="rest" v-if="restart">
    <div
      style="
        width: 100px;
        height: 80px;
        text-align: center;
        font-size: 18px;
        color: #efefef;
        cursor: pointer;
      "
      @click="applyV"
    >
      <img
        src="../assets/images/refresh.png"
        alt="restart"
        style="width: 50px; height: 50px; display: block; margin: auto"
      />
      重新开始
    </div>
  </div>
</template>
<style lang="less" scoped>
.v {
  width: 100%;
  height: 90%;
}
.rest {
  width: 100%;
  height: 90%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
