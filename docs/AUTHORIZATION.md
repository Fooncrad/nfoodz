# Authorization

Tenant membership is resolved server-side from the authenticated user and tenant slug. Client-provided tenant IDs never grant access.

Roles:
- owner: tenant, menu, branches, hours and order operations
- manager: menu, branches, hours and order operations
- staff: order read only by default
- super_admin: platform-level bypass where explicitly supported

Write routes use permission middleware in addition to authentication and tenant membership checks.
