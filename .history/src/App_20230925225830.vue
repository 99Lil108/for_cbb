<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import Head from "./components/Head.vue";
import Main from "./components/Main.vue";
const store = useStore();

onMounted(() => {
  store.commit("initProObj");
  store.commit("setsocket", "ws://127.0.0.1:11018/video");
});
</script>

<template>
  <Head />
  <Main>
    <router-view></router-view>
  </Main>
</template>
