# Briefrail

Creative operations software that keeps briefs, deliverable feedback, approval gates, time, and invoice evidence on one rail.

## Run

`npm run dev`

Core routes: `/`, `/app`, and `/portal/atlas`. Add `GROQ_API_KEY` to `.env.local` for the live grounded brief drafter. Without it, the API uses deterministic extraction and marks unsupported details as `Needs client input`.

The Supabase migration in `supabase/migrations/202607230001_initial.sql` includes the hard approval gate and a unique invoice-to-time-entry join preventing double billing.
