import { NButton } from "#components";
import { encodeDeckCode } from "~/utils/decks";
import type { Deck } from "~/utils/types";

export default function useCopyDeckShareCode(deck?: Deck) {
  const { copy: copyToClipboard } = useClipboard();
  const message = useMessage();
  const notification = useNotification();
  const notificationRead = useLocalStorage("copyDeckCodeNotificationRead", 0);

  async function copy() {
    if (!deck) return;

    await copyToClipboard(encodeDeckCode(deck));
    message.success("已复制");

    if (notificationRead.value < 1) {
      const notificationInstance = notification.success({
        title: "牌组分享码已复制",
        content: "由于算法限制，目前有小几率生成无效的分享码。如果发现了无效分享码，请联系维护者（查看页脚），谢谢您的帮助！",
        action: () => {
          return h(NButton, {
            tertiary: true,
            size: "small",
            onClick: () => {
              notificationRead.value = 1;
              notificationInstance.destroy();
            },
          }, () => "不再提示");
        },
        keepAliveOnHover: true,
        duration: 8000,
      });
    }
  }

  return { copy };
}
