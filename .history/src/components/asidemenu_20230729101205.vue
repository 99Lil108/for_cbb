<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>
<template>
  <el-aside class="aside">
    <el-menu default-active="index" class="el-menu-vertical-demo">
      <el-menu-item index="index">
        <el-icon><icon-menu /></el-icon>
        <span>Index</span>
      </el-menu-item>
      <el-menu-item index="test1">
        <el-icon><icon-menu /></el-icon>
        <span>Test1</span>
      </el-menu-item>
      <el-menu-item index="test2">
        <el-icon><icon-menu /></el-icon>
        <span>Test2</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style></style>
