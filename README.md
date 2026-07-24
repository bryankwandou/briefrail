# Briefrail

Creative operations software that keeps briefs, deliverable feedback, approval gates, time, and invoice evidence on one rail.

## Run

`npm run dev`

Core routes: `/`, `/app`, and `/portal/atlas`. Add `GROQ_API_KEY` to `.env.local` for the live grounded brief drafter. Without it, the API uses deterministic extraction and marks unsupported details as `Needs client input`.

The Supabase migration in `supabase/migrations/202607230001_initial.sql` includes the hard approval gate and a unique invoice-to-time-entry join preventing double billing.

## Live deployment

- Product: https://briefrail.vercel.app
- GitHub: https://github.com/bryankwandou/briefrail
- Wallet proof console: https://briefrail.vercel.app/verify
- Solana network: devnet
- Production attestation: `5KNUtMmX9YpsNFK49sG4z4JSkNvvvGKewtG5Qae2KKBp5bzAbcKgM6A6wKopA54qbD1hVQUzEHXfizVkPgVjCiMc`
- Devnet attestor: `35z7X59rtyts557Up1RAwpyYN7x2cFqcDc7RjPuNxFzr`

The production API verifies a wallet-signed challenge before the server attestor writes the workflow digest through the Solana Memo program. Groq powers the grounded project agent and brief drafter in production.