<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          Main 
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "./Menu/Menu.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100vh;
  .el-container {
    height: 100%;
    .aside {
      height: 100%;
    }
  }
}
</style>