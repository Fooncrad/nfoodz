# Operational UI

The public API menu loads tenant products and active branches. Branch selection is only rendered when more than one active branch exists. Checkout sends product IDs and quantities only; pricing remains server authoritative.

The store orders board refreshes every 15 seconds and supports the controlled lifecycle new → confirmed → preparing → ready → completed.

Branch management is tenant-scoped. Order event storage is available for the audit trail.
