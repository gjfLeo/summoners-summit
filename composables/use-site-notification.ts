import { NButton } from "#components";

export function useSiteNotification() {
  const { t } = useLocales();
  const notificationData = computed(() => ({
    copyDeckCode: {
      type: "success",
      title: t("site.notifications.copyDeckCode.title"),
      content: t("site.notifications.copyDeckCode.content"),
      latestVersion: 1,
    },
  }));
  type NotificationKey = keyof typeof notificationData.value;

  const notification = useNotification();
  const notificationRead = useLocalStorage<Partial<Record<NotificationKey, number>>>("notificationRead", {});

  function showNotification(key: keyof typeof notificationData.value) {
    const readVersion = notificationRead.value[key] ?? 0;
    if (readVersion >= notificationData.value[key].latestVersion) return;

    const notificationInstance = notification.success({
      title: notificationData.value[key].title,
      content: notificationData.value[key].content,
      action: () => {
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
  }

  return { showNotification };
}
