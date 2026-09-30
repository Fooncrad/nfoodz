# Orders, QR and media

Public checkout never accepts prices from the browser. The API reloads active product prices from the tenant-scoped database and calculates totals server-side.

Order lifecycle: new → confirmed → preparing → ready → completed. Cancellation is also supported.

Every order receives a human-readable NF-* reference while UUID remains the database identity.

QR codes resolve to the canonical /menu/{slug} route. Business hours are stored per branch and day.

Product uploads currently use a local development storage adapter with a 5 MB limit and JPEG/PNG/WebP allow-list. Production should replace this adapter with object storage while preserving image_key semantics.
