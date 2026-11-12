# Organizer

A mobile-first PWA for iOS: a quick expense tracker with charts, a fast "inbox" for notes, and (later) a daily routine calendar with push reminders.

> **Status:** work in progress — stage 3 of 12 (quick notes). See the [roadmap](#roadmap).

## Why

Banking apps show _that_ money was spent, not _what on_ or _where_. Organizer makes adding an expense a few-second, step-by-step flow and turns the data into clear statistics.

## Key ideas

- **Local-first:** data lives in the browser (IndexedDB); the app works offline and without an account.
- **Optional account:** Supabase provides auth plus automatic backup and sync across devices.
- **Money done right:** amounts are stored as integers in minor units (no floating-point errors), with an exchange-rate snapshot per expense.

Design decisions and their trade-offs are documented in [`docs/decisions.md`](docs/decisions.md).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), React, TypeScript (strict)
- Tailwind CSS, Framer Motion
- Dexie.js (IndexedDB) with reactive queries via `useLiveQuery`
- Serwist (service worker) — planned
- Supabase: PostgreSQL, Row Level Security, Edge Functions — planned
- ESLint, Prettier, Vitest
- Testing Library, Playwright — planned

## Getting started

Requirements: Node.js 26 ([nvm](https://github.com/nvm-sh/nvm) recommended).

```bash
nvm use        # switches to the Node version from .nvmrc
npm ci         # installs exact dependency versions from package-lock.json
npm run dev    # starts the dev server at http://localhost:3000
```

## Scripts

| Script                 | What it does                               |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the development server               |
| `npm run build`        | Production build                           |
| `npm run start`        | Serve the production build                 |
| `npm run lint`         | Lint with ESLint                           |
| `npm run typecheck`    | Type-check with `tsc --noEmit`             |
| `npm run test`         | Run unit tests with Vitest                 |
| `npm run format`       | Format all files with Prettier             |
| `npm run format:check` | Check formatting without changing files    |

## Roadmap

0. ✅ Planning: user flows, screens, data model
1. ✅ Foundation: tooling, CI, deployment, mobile layout
2. ✅ Data layer (Dexie)
3. 🚧 Quick notes
4. Add expense (step-by-step flow)
5. Expense list, editing, filters, search
6. PWA: install, offline, testing on a real iPhone
7. Statistics and charts
8. Map and geolocation
9. Photos and receipt scanning (OCR)
10. Supabase: auth, sync, backup
11. Routine calendar with push reminders
12. Polish: accessibility, e2e tests, Lighthouse, demo

## License

[MIT](LICENSE)
