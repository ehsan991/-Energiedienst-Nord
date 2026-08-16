# Energiedienst Nord Website

Modern bilingual corporate website for **Energiedienst Nord**.

## Stack

- Next.js 16 / App Router
- React + TypeScript
- Tailwind CSS 4
- next-intl (`de`, `en`)
- next-themes (Light / Dark)
- Payload CMS + PostgreSQL

## Architecture

All public pages and service content are static in the Next.js source. Payload is intentionally kept minimal and is currently used only for the admin user and contact form submissions.

### Payload collections

- `users`
- `contact-submissions`

The contact form stores: name, company, email, phone, subject, message, language and processing status.

## Routes

- `/de` and `/en`
- `/{locale}/leistungen/energy`
- `/{locale}/leistungen/finance`
- `/{locale}/leistungen/real-estate`
- `/{locale}/leistungen/telecom`
- `/{locale}/unternehmen`
- `/{locale}/kontakt`
- `/admin`

## Local setup

```bash
cp .env.example .env
corepack enable
pnpm install
pnpm dev
```

Required environment variables:

```env
DATABASE_URI=postgres://postgres:postgres@127.0.0.1:5432/energiedienst_nord
PAYLOAD_SECRET=replace-with-a-long-random-secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
