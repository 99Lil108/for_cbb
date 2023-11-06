<script setup>
import { useStore } from "vuex";
import Head from "./components/Head.vue";
import Main from "./components/Main.vue";
const store = useStore();
</script>

<template>
  <Head />
  <Main>
    <router-view></router-view>
  </Main>
</template>
