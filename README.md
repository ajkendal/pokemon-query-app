## Pokémon Query App

A small React app to explore Pokémon data via GraphQL. Built for practice and fun while learning GraphQL client-side patterns.

- Live site: https://pokemon-query-app.vercel.app/
- Course followed for inspiration: https://scrimba.com/build-an-app-with-react-and-graphql-c015:about

### Why this project

I created this to work on GraphQL for practice and fun. The original course is a bit outdated, so I updated the stack to modern packages and tooling.

## Tech stack

- React 19
- Vite 7 (dev server and build tool)
- Apollo Client 4 (GraphQL client)
- GraphQL 16
- graphql-tag (gql template literal helper)
- ESLint 9 with React plugins
- Styling: plain CSS (`src/App.css`)

## Notable adjustments vs. the course

The course used older Apollo packages (apollo-boost and @apollo/react-hooks). I migrated to the modern `@apollo/client` package and configured the client with explicit `link` and `cache`:

- Replace `apollo-boost` and `@apollo/react-hooks` with `@apollo/client`.
- Import `ApolloClient`, `InMemoryCache`, and `HttpLink` from `@apollo/client`.
- Use `ApolloProvider` from `@apollo/client/react` (works well with Vite’s ESM bundling).

## Local development

Prerequisites: Node 18+ and npm.

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the dev server

   ```sh
   npm run dev
   ```

3. Open the app

   Vite will print a local URL, typically http://localhost:5173 or the next available port.

## Project structure

- `src/App.jsx` – App root, Apollo Client setup and provider
- `src/containers/PokemonsContainer.jsx` – Fetches and renders Pokémon list
- `src/graphql/get-pokemon.jsx` – GraphQL query documents
- `src/components/` – Presentational components (e.g., `Pokemon`)
- `src/assets/` – Static assets

## Notes / troubleshooting

- If you upgrade or change Apollo packages, clear Vite’s cache (`node_modules/.vite`) and restart the dev server.
- Ensure the GraphQL endpoint is reachable: `https://graphql-pokemon2.vercel.app/`.
- If you see module export errors for `ApolloProvider`, import it from `@apollo/client/react`.

## License

This project is for learning purposes.
