# TRUSTIFY Frontend

TRUSTIFY is a decentralized document authentication frontend built with Next.js App Router.

## Setup

1. Install dependencies: `npm install`
2. Create `.env.local` using the environment variables below.
3. Run dev server: `npm run dev`

## Environment Variables

- `NEXT_PUBLIC_DOCUMENT_REGISTRY_ADDRESS`
- `NEXT_PUBLIC_ACCESS_CONTROL_ADDRESS`
- `NEXT_PUBLIC_CHAIN_ID`
- `NEXT_PUBLIC_RPC_URL`
- `NEXT_PUBLIC_EXPLORER_URL`
- `NEXT_PUBLIC_PINATA_KEY`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- `NEXT_PUBLIC_DEMO_MODE=true`

## Project Structure

- `src/app` route pages and app shell
- `src/components` UI, trust, document, web3 and system components
- `src/hooks` wallet, hashing, verification, and upload hooks
- `src/lib` contracts, crypto, constants, and utility functions
- `src/providers` provider composition

## Contract Connection

Set contract addresses in `.env.local` and disable demo mode to use chain reads/writes.

## Demo Mode

Set `NEXT_PUBLIC_DEMO_MODE=true` to use `src/lib/constants/mockData.ts` for verification without deployed contracts.
