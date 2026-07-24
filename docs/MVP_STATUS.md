# MVP Status

## Working now

- Responsive brand-led landing page.
- Agency dashboard with project, approval, time, and unbilled-value signals.
- Grounded brief drafting through Groq with deterministic no-key fallback.
- Missing brief facts marked `Needs client input`.
- Interactive redline resolution workflow.
- Server-side approval rejection while comments remain open.
- Time-entry eligibility and server-side invoice calculation.
- Previously invoiced entries excluded from invoice generation.
- Optional live Stripe draft invoice creation when credentials and customer ID exist.
- Client review portal with interactive comment resolution, server-enforced approval, and printable review evidence.
- Dedicated Atlas workspace with upload preview, version history selector, persistent state, pinned comments, brief approval, live timer, and invoice generation.
- Supabase schema with deliverables, comments, time, invoices, and integrity constraints.
- Automated workflow tests and successful production build.

## Credential-dependent production work

- Apply the Supabase migration and configure Auth, Storage, and Realtime.
- Add Supabase URL, anon key, and service-role key.
- Add Stripe secret and webhook keys plus a real customer mapping.
- Configure Vercel environment variables and deploy.
- Connect a GitHub account and create the public repository.

## Definition of done for public beta

- Negative cross-client RLS test passes.
- File upload and versioned preview work for image and PDF.
- Realtime comments sync across two authenticated sessions.
- Stripe test-mode invoice is created, sent, and paid through webhook update.
- Accessibility audit passes keyboard redline navigation and status labeling.
## Production proof — July 24, 2026

- GitHub public repository pushed successfully.
- Vercel production alias returns HTTP 200 for all product surfaces.
- Groq agent returns grounded production output.
- Ephemeral wallet challenge signature verified by the production API.
- Confirmed Solana devnet Memo transaction: `5KNUtMmX9YpsNFK49sG4z4JSkNvvvGKewtG5Qae2KKBp5bzAbcKgM6A6wKopA54qbD1hVQUzEHXfizVkPgVjCiMc`.
- Motion animations are enabled with reduced-motion accessibility fallback.