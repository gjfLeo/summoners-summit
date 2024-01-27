import { NButton } from "#components";
import { encodeDeckCode } from "~/utils/decks";
import type { Deck } from "~/utils/types";

export default function useCopyDeckShareCode(deck?: Deck) {
  const { copy: copyToClipboard } = useClipboard();
  const message = useMessage();
  const notification = useNotification();
  const notificationRead = useLocalStorage("copyDeckCodeNotificationRead", 0);
  const { t } = useI18n();

  async function copy() {
    if (!deck) return;

    await copyToClipboard(encodeDeckCode(deck));
    message.success(t("actions.copied"));

    if (notificationRead.value < 1) {
      const notificationInstance = notification.success({
        title: t("actions.copyDeckShareCodeNotifyTitle"),
        content: t("actions.copyDeckShareCodeNotifyContent"),
        action: () => {
          return h(NButton, {
            tertiary: true,
            size: "small",
            onClick: () => {
              notificationRead.value = 1;
              notificationInstance.destroy();
            },
          }, () => t("actions.doNotShowAgain"));
        },
        keepAliveOnHover: true,
        duration: 8000,
      });
    }
  }

  return { copy };
}
