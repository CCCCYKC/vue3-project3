<template>
  <el-menu
    :style="{ width: '230px' }"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="menu-contain"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <p class="logo-top">DIDI陪诊</p>
    <TreeMenu :menuData="menuData"></TreeMenu>
  </el-menu>
</template>

<script setup>
import TreeMenu from "./TreeMenu.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// 获取路由实例里面的路由，并传递给子组件进行菜单渲染
const menuData = reactive(router.options.routes[0].children);

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style lang="less" scoped>
.menu-contain {
  height: 100%;
  .logo-top {
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
}
</style>