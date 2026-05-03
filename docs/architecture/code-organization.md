# Code Organization

## Top-level Layout

- `frontend/`: web application and shared UI.
- `backend/`: server transport, API, auth, and persistence.
- `shared/`: cross-package environment and tooling config.
- `shared/env`: runtime environment parsing and validation that multiple packages import.
- `shared/config`: base TypeScript and package configuration that packages extend rather than duplicate.

## Frontend Rules

- Keep `src/app` focused on route entrypoints.
- Put feature-specific UI and orchestration in `src/features/<feature>`.
- Keep `src/components` for app-shared UI that does not belong in `frontend/ui`.
- Use `src/lib` for framework glue and `src/utils` only for small stateless helpers.

## Backend Rules

- Keep `backend/server` focused on transport/bootstrap.
- Keep `backend/api/src/routers` as the request boundary.
- Keep `backend/auth` focused on authentication flows, session handling, and auth-specific integration points.
- Put reusable application logic in `backend/api/src/services` once it outgrows a trivial procedure.
- Keep persistence concerns in `backend/db`.

## Promotion Rules

- Move code to `shared/` only when it is genuinely shared by multiple packages.
- Prefer a focused feature folder over broad utility buckets.
