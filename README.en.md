# Summoners' Summit

<p> </p>

[![Crowdin](https://badges.crowdin.net/summoners-summit/localized.svg)](https://crowdin.com/project/summoners-summit)

Information hub for Genius Invokation TCG events.

Website: https\://gjfleo.github.io/summoners-summit/

The project is mainly based on [Nuxt](https://nuxt.com/), and the website is deployed on GitHub Pages using static site generation (SSG).

## Deploying the project

<details><summary>Deploy instructions</summary>

### Environment

- Node: 18.x
- pnpm

### Installing dependencies

```bash
pnpm i
```

### Deploying locally

```bash
pnpm run dev
```

### Generating static pages

For generating static pages of the website to be uploaded to GitHub Pages or another hosting service of choice.

```bash
pnpm run generate
```

To preview:

```bash
pnpm run preview:ssg
```

### Building

Use this command to build Node.js Server, which can be used for API calls.

```bash
pnpm run build
```

To preview:

```bash
pnpm run preview
```

</details>

## Regarding data

As this is a purely front-end project, all data is currently stored in the source code. However, since the pages are generated using SSG, it's not a big problem for now.

- Tournament data is stored [here](./server/data/tournaments).
- Players' display name mappings are stored [here](./server/data/players/index.ts).

## API

The project includes a built-in API that is mainly used to fetch data for static website generation.

Due to exceeding of building usage, the API no longer keeps updated on Netlify. Still available by starting a local server.

<details><summary>Example API usage</summary>

- [`/tournaments`](https://summoners-summit.netlify.app/api/v1/tournaments) - Get a list of all events.
  - [`?gameVersion=3.8`](https://summoners-summit.netlify.app/api/v1/tournaments?gameVersion=3.8) - Only get events from specified version. Default is all versions.
- [`/tournaments/:tournamentId`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80) - Get general information of a tournament.
- [`/tournaments/:tournamentId/details`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80/details) - Get detailed information of a tournament (including all matches' details).
- [`/matches/:matchId`](https://summoners-summit.netlify.app/api/v1/matches/b7f4346442601d8001) - Get details of a specific match.
- [`/games`](https://summoners-summit.netlify.app/api/v1/games) - Get a list of games.
  - [`?limit=10&offset=10`](https://summoners-summit.netlify.app/api/v1/games?limit=10\&offset=10) - Game count and offset for pagination. Default is `limit=50`.
  - Other parameters TBA.
- [`/decks/:deckId`](https://summoners-summit.netlify.app/api/v1/decks/dd6dae64467a5555) - Get information of a specific deck.
- [`/team-stats`](https://summoners-summit.netlify.app/api/v1/team-stats) - Get statistics of all main deck combinations.

</details>
