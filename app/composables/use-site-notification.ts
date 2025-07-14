import type { NotificationOptions } from "naive-ui";
import { NButton } from "#components";

type NotificationData = Record<string, {
  latestVersion: number;
  autoRead?: boolean;
} & Pick<NotificationOptions, "type" | "title" | "content">>;

export function useSiteNotification() {
  const { t } = useLocales();
  const notificationData = computed<NotificationData>(() => ({
    changeDomain: {
      type: "info",
      title: t("site.notifications.changeDomain.title"),
      content: t("site.notifications.changeDomain.content"),
      latestVersion: 1,
      autoRead: true,
    },
    copyDeckCode: {
      type: "success",
      title: t("site.notifications.copyDeckCode.title"),
      content: t("site.notifications.copyDeckCode.content"),
      latestVersion: 1,
    },
  } satisfies NotificationData));
  type NotificationKey = keyof typeof notificationData.value;

  const notification = useNotification();
  const notificationRead = useLocalStorage<Partial<Record<NotificationKey, number>>>("notificationRead", {});

  function showNotification(key: keyof typeof notificationData.value) {
    const readVersion = notificationRead.value[key] ?? 0;
    if (readVersion >= notificationData.value[key].latestVersion) return;

    const notificationInstance = notification.create({
      type: notificationData.value[key].type,
      title: notificationData.value[key].title,
      content: notificationData.value[key].content,
      action: notificationData.value[key].autoRead
        ? undefined
        : () => {
            return h(NButton, {
              tertiary: true,
              size: "small",
              onClick: () => {
                notificationRead.value[key] = notificationData.value[key].latestVersion;
                notificationInstance.destroy();
              },
            }, () => t("site.messages.doNotShowAgain"));
          },
      keepAliveOnHover: true,
      duration: 8000,
    });
    if (notificationData.value[key].autoRead) {
      notificationRead.value[key] = notificationData.value[key].latestVersion;
    }
  }

  function setNotificationReadVersion(key: NotificationKey, version: number) {
    notificationRead.value[key] = version;
  }

  return { showNotification, setNotificationReadVersion };
}
