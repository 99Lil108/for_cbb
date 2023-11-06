<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>Index</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Test1</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <span>Test2</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style></style>
