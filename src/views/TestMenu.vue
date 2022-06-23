<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <!-- <el-icon><location /></el-icon>
        <span>Navigator One</span> -->
        <Item icon="location" title="Navigator One" :is-collapse="isCollapse" />
      </template>
      <el-sub-menu index="1-4">
        <template #title>
          <Item icon="location" title="item One" :is-collapse="isCollapse" />
        </template>
        <el-menu-item index="1-4-1">
          <!-- TODO: 嵌套太深 -->
          <Item icon="location" title="item Two" :is-collapse="isCollapse" />
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <!-- <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template> -->
      <Item icon="location" title="Navigator Two" :is-collapse="isCollapse" />
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue';
import Item from '../components/sidebar/Item.vue';

const isCollapse = ref(true);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
