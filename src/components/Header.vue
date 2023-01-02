<template>
  <el-header class="header">
    <el-row justify="center">
      <el-col class="header-row" :span="16" :xs="24">
        <router-link to="/">
          <div class="header-logo">
          <img src="@/assets/img/mtdd-logo.png" alt="" />
          <span class="hidden-xs-only">MTDD</span>
        </div>
        </router-link>
       
        <el-menu
          class="frontend-header-menu"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-menu-item index="1">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/login">Member Center</router-link>
            </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/about">About</router-link>
            </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Header",
  
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  color: #fff;
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
  color: #fff;
  text-decoration: none;
}

.header .frontend-header-menu .el-menu-item:hover,
.header .frontend-header-menu .el-sub-menu .el-sub-menu__title:hover {
  background-color: transparent;
  color: #45bfaa;
  // color: var(--el-menu-hover-text-color);
}

// .router-link-active {
//   text-decoration: none;
// }

</style>
