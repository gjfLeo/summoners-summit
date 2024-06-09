import { NButton } from "#components";
import type { DeckCards } from "~/types/data/deck";

export default function useCopyDeckShareCode(deckMaybeRef: MaybeRef<DeckCards>) {
  const { copy: copyToClipboard } = useClipboard();
  const message = useMessage();
  // const notification = useNotification();
  // const notificationRead = useLocalStorage("copyDeckCodeNotificationRead", 0);
  const { t } = useLocales();
  const { encodeDeck } = useDeckEncoder();

  async function copy() {
    const deck = unref(deckMaybeRef);
    if (!deck) return;

    await copyToClipboard(encodeDeck(deck));
    message.success(t("site.messages.copied"));

    // if (notificationRead.value < 1) {
    //   const notificationInstance = notification.success({
    //     title: t("actions.copyDeckShareCodeNotifyTitle"),
    //     content: t("actions.copyDeckShareCodeNotifyContent"),
    //     action: () => {
    //       return h(NButton, {
    //         tertiary: true,
    //         size: "small",
    //         onClick: () => {
    //           notificationRead.value = 1;
    //           notificationInstance.destroy();
    //         },
    //       }, () => t("actions.doNotShowAgain"));
    //     },
    //     keepAliveOnHover: true,
    //     duration: 8000,
    //   });
    // }
  }

  return { copy };
}
