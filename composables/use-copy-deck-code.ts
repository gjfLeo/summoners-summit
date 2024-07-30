import type { DeckCards, DeckCode } from "~/types/data/deck";

export default function useCopyDeckCode(deckMaybeRef: MaybeRef<DeckCards> | MaybeRef<DeckCode>) {
  const { copy: copyToClipboard } = useClipboard();
  const message = useMessage();
  const { t } = useLocales();
  const { encodeDeck } = useDeckEncoder();

  const { showNotification } = useSiteNotification();

  async function copy() {
    const deck = unref(deckMaybeRef);
    if (!deck) return;

    await copyToClipboard(typeof deck === "string" ? deck : encodeDeck(deck));
    message.success(t("site.messages.copied"));

    showNotification("copyDeckCode");
  }

  return { copy };
}
