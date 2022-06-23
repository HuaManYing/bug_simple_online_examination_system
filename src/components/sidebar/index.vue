<template>
  <el-menu
    router
    style="height: 100%"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    :default-active="activeMenuIndex"
    text-color="#fff"
    background-color="#545c64"
    :collapse="isCollapse"
  >
    <button @click="isCollapse = !isCollapse">展开/收起</button>
    <sidebar-item
      v-for="currentRoute in routes"
      :key="currentRoute.path"
      :current-route="currentRoute"
      :is-collapse="isCollapse"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
import { useStore } from '../../store';
import SidebarItem from './SidebarItem.vue';

const route = useRoute();
const store = useStore();
const activeMenuIndex = ref(route.fullPath);
const routes = ref<Array<RouteRecordRaw>>(store.routes);
const isCollapse = ref(true);
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
