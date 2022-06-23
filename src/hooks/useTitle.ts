import { onMounted } from 'vue';
export const useTitle = (title: string): void => {
  onMounted(() => {
    document.title = title;
  });
};
