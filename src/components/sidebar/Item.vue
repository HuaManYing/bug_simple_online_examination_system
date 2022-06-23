<template>
  <div class="icon-title">
    <el-icon>
      <component :is="icon" style="width: 20px; height: 20px" />
    </el-icon>
    <span :class="isCollapse ? 'span-is-collapse' : ''">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  isCollapse: boolean;
}>();
</script>

<style scoped>
.icon-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.span-is-collapse {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
