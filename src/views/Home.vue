<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <!-- <el-aside class="layout-aside" width="200px"> -->
      <sidebar />
      <!-- </el-aside> -->
      <el-container>
        <el-header class="layout-header">
          <span>在线考试系统</span>
        </el-header>
        <el-main class="layout-main">
          <div class="userinfo">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.common-layout {
  height: 100vh;
}
.layout-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: white;
}

.layout-main {
  background-color: #e9eef3;
}

.el-dropdown-link {
  cursor: pointer;
  /* color: var(--el-color-primary); */
  display: flex;
  align-items: center;
}
/* .common-layout >>> .el-menu-item-group__title {
  padding: 0;
  padding-left: 40px;
} */

.el-sub-menu .el-menu-item {
  height: 40px;
  font-size: 12px;
}
.el-sub-menu .el-menu .el-sub-menu >>> .el-sub-menu__title {
  height: 40px;
  font-size: 12px;
}

.userinfo {
  background-color: #f5f7fa;
  border-radius: 10px;
  padding: 20px;
}
</style>
