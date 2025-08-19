<template>
  <div class="header">
    <div class="icon">
      <el-icon><Fold /></el-icon>
      <el-icon><Expand /></el-icon>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .icon{
    font-size: 30px;
  }
}
</style>