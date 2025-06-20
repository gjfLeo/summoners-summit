import { z } from "zod";
import { ZGameVersionId, ZSeasonPhrase, ZSeasonPhraseId } from "~/types";

function getVersionData(maxVersionId?: string) {
  const seasonPhrases = z.record(ZSeasonPhraseId, ZSeasonPhrase).parse(readData("misc/season-phrases"));
  return Object.values(seasonPhrases)
    .flatMap((p) => {
      return p.gameVersions.map((v) => {
        return {
          id: v,
          seasonPhrase: p.id,
        };
      });
    })
    .filter(v => !maxVersionId || v.id.localeCompare(maxVersionId) <= 0)
    .sort((a, b) => b.id.localeCompare(a.id));
}

const ZParams = z.object({
  version: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event) => {
  const { version } = await getValidatedQuery(event, ZParams.parse);

  const versionData = getVersionData(version);
  writeData("misc/game-versions", Object.fromEntries(versionData.map(v => [v.id, v])));

  return responseOk();
});
