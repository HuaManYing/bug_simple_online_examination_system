// TODO: 封装 element-plus 的 message 提示组件
import { ElMessage } from 'element-plus';
import { BuildPropType, PropWrapper } from 'element-plus/lib/utils';
import 'element-plus/theme-chalk/el-message.css';
import { RendererElement, RendererNode, VNode } from 'vue';

type ElMessageType = 'success' | 'info' | 'warning' | 'error';
type ElMessageMessage =
  | BuildPropType<
      PropWrapper<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        string | VNode<RendererNode, RendererElement, { [key: string]: any }>
      >,
      unknown,
      unknown
    >
  | undefined;

export const useElMessage = (
  message: ElMessageMessage,
  type: ElMessageType = 'success'
) => {
  ElMessage({
    message,
    type,
  });
};
