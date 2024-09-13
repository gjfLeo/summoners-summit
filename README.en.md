# Summoners' Summit

<p> </p>

Information hub for Genius Invokation TCG events.

Website: https://www.summoners.top/

The project is mainly based on [Nuxt](https://nuxt.com/), and the website is deployed on Vercel using static site generation (SSG).

## About Data

Currently the data is maintained by the API using Nuxt, but deployed without server. The data files are stored in the code repository.

<details><summary>Data Maintenance</summary>

### 1. Clone the repository to your local machine.

Notice that the project is currently using the `v3` branch.

### 2. Install dependencies and start the project locally.

Required environments: Node.js 20+，pnpm

```bash
pnpm i && pnpm dev
```

### 3. Edit data in the browser, and the local data files will be updated accordingly.

The default dev server run on `http://localhost:3000`, and you can enter the management mode by clicking the button on the top right corner.

### 4. Commit the updated data files to the code repository.

You can use Git tools, or the local page's button on the top right corner to commit and push the changes.

Example commands:

```bash
git add server/data
git commit -m "data"
git push
```

</details>
