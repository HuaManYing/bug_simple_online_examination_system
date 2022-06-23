<template>
  <template v-if="!currentRoute.meta?.noSidebarShow">
    <!-- 只有一个需要展示的子菜单 menu1 -->
    <template v-if="hasOnlyOneChild(currentRoute)">
      <!-- 如果 menu1 有 child-->
      <template
        v-if="
          onlyOneShowingChild &&
          onlyOneShowingChild?.children &&
          onlyOneShowingChild.children.length >= 1
        "
      >
        <el-sub-menu index="1">
          <template #title>
            <item
              :icon="(onlyOneShowingChild.meta?.icon as string)"
              :title="(onlyOneShowingChild?.meta?.title as string)"
              :is-collapse="isCollapse"
            />
            <!-- <el-icon><location /></el-icon>
            <span>{{ onlyOneShowingChild?.meta?.title }}</span> -->
          </template>
          <sidebar-item
            v-for="child in onlyOneShowingChild.children"
            :key="child.path"
            :current-route="child"
            :is-collapse="isCollapse"
          />
        </el-sub-menu>
      </template>
      <!-- 如果 menu1 没有 child-->
      <template v-else>
        <!-- <el-menu-item :index="onlyOneShowingChild.path || currentRoute.path">
          {{ onlyOneShowingChild.meta?.title }}11
        </el-menu-item> -->
        <el-menu-item :index="resolvePath(onlyOneShowingChild)">
          <item
            :icon="(resolveTitleAndIcon(onlyOneShowingChild).icon as string)"
            :title="(resolveTitleAndIcon(onlyOneShowingChild).title as string)"
            :is-collapse="isCollapse"
          />
          <!-- <el-icon><location /></el-icon>
          <span>{{ resolveTitleAndIcon(onlyOneShowingChild).title }}</span> -->
        </el-menu-item>
      </template>
    </template>
    <template v-else>
      <el-sub-menu index="2">
        <template #title>
          <item
            :icon="(currentRoute.meta?.icon as string)"
            :title="(currentRoute?.meta?.title as string)"
            :is-collapse="isCollapse"
          />
          <!-- <el-icon><location /></el-icon>
          <span>{{ currentRoute?.meta?.title }}</span> -->
        </template>

        <sidebar-item
          v-for="item in currentRoute.children"
          :key="item.path"
          :current-route="item"
          :is-collapse="isCollapse"
        />
      </el-sub-menu>
    </template>
  </template>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import Item from './Item.vue';

const props = defineProps<{
  currentRoute: RouteRecordRaw;
  isCollapse: boolean;
}>();
const onlyOneShowingChild = ref<RouteRecordRaw>();

// 判断当前路由是否只有一个需要展示的sidebar
const hasOnlyOneChild = (route: RouteRecordRaw) => {
  if (!route.children) {
    onlyOneShowingChild.value = undefined;
    return true;
  }
  const children = route.children as RouteRecordRaw[];
  const len = children?.length as number;
  if (len === 1) {
    onlyOneShowingChild.value = children[0];
    return true;
  }

  const sidebarShowArr = children?.filter(
    (item) => !item.meta?.noSidebarShow
  ) as RouteRecordRaw[];
  if (sidebarShowArr?.length > 1) {
    return false;
  } else {
    onlyOneShowingChild.value = sidebarShowArr[0];
    return true;
  }
};

//  获得侧边栏的path
const resolvePath = (route: RouteRecordRaw | undefined) => {
  // 如果 route 的 path 为空字符串，则应该去找他父级的path，即 传过来的 currentRoute
  // 如果 route 为空则表明他没有children了，则应该去他本身查找path，即 传过来的 currentRoute
  if (!route || route.path === '') {
    return props.currentRoute.path;
  }
  return route.path;
};

// 获得侧边栏的 title
const resolveTitleAndIcon = (route: RouteRecordRaw | undefined) => {
  // 如果 route 为空则表明他没有children了，则应该去他本身查找标题，即 传过来的 currentRoute
  if (!route) {
    return {
      title: props.currentRoute.meta?.title,
      icon: props.currentRoute.meta?.icon,
    };
  }
  return {
    title: route.meta?.title,
    icon: route.meta?.icon,
  };
};
</script>

<style scoped>
/* .el-menu--collapse > .el-menu-item > span,
.el-menu--collapse > .el-sub-menu > .el-sub-menu__title > span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
} */
</style>
