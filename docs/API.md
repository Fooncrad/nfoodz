# NFOODZ API

## Authentication
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

Session tokens are stored in HttpOnly cookies. Passwords are hashed with bcrypt. Production cookies require HTTPS.

## Tenants
POST /api/tenants creates the tenant, its owner membership, and the first primary branch in one database transaction.
GET /api/tenants/:slug requires authenticated membership.

## Menu
GET /api/menu/public/:slug is public and returns only active tenants/categories/products.
POST /api/menu/:slug/categories requires tenant membership.
POST /api/menu/:slug/products requires tenant membership and validates that the selected category belongs to the same tenant.

Tenant authorization is resolved server-side from the authenticated user plus the tenant slug. A client-supplied tenant ID is never trusted for authorization.
