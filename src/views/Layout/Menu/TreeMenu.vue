<template>
  <div>
    <!-- 判断是一级还是多级菜单 -->
    <div v-for="item in props.menuData" :key="item.path">
      <!-- 多级菜单 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 0"
      >
        <template #title>
          <el-icon size="20">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.name }}</span>
        </template>
        <!-- 继续判断item.children是一级还是多级菜单-----递归 -->
        <el-menu-item-group>
          <!-- vue3 递归只需要名字与文件名一样就可以了 -->
          <TreeMenu :menuData="item.children"></TreeMenu>
        </el-menu-item-group>
      </el-sub-menu>

      <!-- 一级菜单--一级菜单才会跳转 -->
      <el-menu-item :index="item.path" v-else @click="handlePush(item.meta.realPath)">
        <!-- 动态组件 vue的语法 -->
        <el-icon size="20">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.name }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["menuData"]);
const router = useRouter();

// 点击一级菜单时跳转响应页面
const handlePush = (path) => {
  router.push(path);
};
</script>

<style lang="less" scoped>
</style>