<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";
import { Loading } from "@dataview/datav-vue3";
import { useStore } from "vuex";
const data = reactive({
  restart: false,
  videoError: false,
  isLoading: true,
});
const store = useStore();
const imageElement = ref(null);
let socket = store.state.socket;
function applyV() {
  if (socket) socket.emit("apply");
  data.restart = false;
  data.isLoading = true;
}
onMounted(() => {
  socket.emit("videoTransfer");
  socket.on("videoComing", ({ img, errorExist, isEnding }) => {
    console.log(1);
    data.isLoading = false;
    if (errorExist) data.videoError = true;
    if (isEnding) data.restart = true;
    else {
      imageElement.value.src = `data:image/jpeg;base64,${img}`;
    }
  });
  socket.on("ready", (_) => {
    data.isLoading = true;
    applyV();
  });
});
onUnmounted(() => {
  socket.emit("videoEnding");
});
</script>
<template>
  <div
    class="v"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2cdbd8;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.4);
    "
    v-if="data.isLoading"
  >
    <Loading>加载中...</Loading>
  </div>
  <img
    ref="imageElement"
    class="v"
    style="object-fit: cover"
    v-show="!data.isLoading"
  />
  <div class="rest" v-if="data.restart">
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
