<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <!-- 菜单组件 -->
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 顶部组件 -->
          <Header></Header>
        </el-header>
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
import Header from "./Header/Header.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100vh;
  .el-container {
    height: 100%;
    .aside {
      height: 100%;
      width: auto !important;
    }
  }
}
</style>