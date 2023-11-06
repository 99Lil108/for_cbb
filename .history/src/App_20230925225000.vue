<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import Head from "./components/Head.vue";
import Main from "./components/Main.vue";
import io from "socket.io-client";
const store = useStore();

onMounted(() => {
  store.commit("init");
});
</script>

<template>
  <Head />
  <Main>
    <router-view></router-view>
  </Main>
</template>
