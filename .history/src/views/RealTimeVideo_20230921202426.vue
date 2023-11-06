<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import io from "socket.io-client";
const imageElement = ref(null);
const restart = ref(false);
const videoError = ref(false);
let socket = null;
function applyV() {
  if (socket) socket.emit("apply");
  restart.value = false;
}
onMounted(() => {
  socket = io("ws://127.0.0.1:5000/video");
  socket.on("videoComing", (data) => {
    if (data.isEnding == true && data.errorExist) {
      videoError.value = true;
      restart.value = true;
    } else if (data.isEnding == true) restart.value = true;
    else imageElement.value.src = `data:image/png;base64,${data.img}`;
  });
  socket.on("ready", (_) => {
    applyV();
  });
});
onUnmounted(() => {
  socket.emit("dis", "v_dljsjc");
  socket.disconnect();
});
</script>
<template>
  <img ref="imageElement" autoplay class="v" />
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
