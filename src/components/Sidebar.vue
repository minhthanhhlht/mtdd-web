<template>
  <el-aside class="ba-user-layouts">
    
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"     
    >
     
    <!-- <el-menu-item class="menu-item" index="1">
        <el-icon><Expand /></el-icon>        
      </el-menu-item> -->
      <el-menu-item index="2">
        <el-icon><ChatDotSquare /></el-icon>
        <template #title>Thông tin sản phẩm</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Tools /></el-icon>
       
        <template #title>Quản lý sản phẩm</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><document /></el-icon>
        <template #title>Danh sách sản phẩm</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped lang="scss">
/* .el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
    color: inherit;
    text-decoration: none;
} */
.menu-item {
    right: 0;
}
.ba-user-layouts {
  margin-top: 60px;
  width: 240px;
  background-color: var(--ba-bg-color-overlay);
  box-shadow: var(--el-box-shadow-light);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: 100%;
  //   min-height: 400px;
}
</style>
