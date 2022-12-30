<template>
      
    <el-container class="container"> 
      <Header />
      <Sidebar />
    </el-container>    
  
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Header, Sidebar },
};
</script>

<style lang="scss" scoped>

.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/bg.jpg) repeat;
}

.header {
  color: rgb(0, 0, 0);
  width: 100%;
  position: fixed;
  background-color: transparent !important;
  // box-shadow: 0 0 8px rgba(0 0 0 / 8%);
}

.header .frontend-header-menu {
  background-color: transparent !important;
  // box-shadow: 0 0 8px rgba(0 0 0 / 8%);
}
.el-header {
  padding: 0;
}
.header-row {
  display: flex;
}

.header-logo {
  display: flex;
  height: 60px;
  align-items: center;
  cursor: pointer;

  img {
    height: 34px;
    width: 34px;
  }
  span {
    font-weight: bold;
    padding-left: 12px;
    font-size: var(--el-font-size-large);
  }
}

.el-menu--horizontal {
  margin-left: auto;
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-menu-item > a,
.el-menu--horizontal > :deep(.el-sub-menu) .el-sub-menu__title,
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.header .frontend-header-menu .el-menu-item:hover,
.header .frontend-header-menu .el-sub-menu .el-sub-menu__title:hover {
  background-color: transparent;
  color: var(--el-menu-hover-text-color);
}

a {
  color: rgb(0, 0, 0) !important;
  display: inline-block;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

// .router-link-active {
//   text-decoration: none;
// }
</style>
