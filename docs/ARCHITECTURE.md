# NFOODZ architecture

NFOODZ is a clean multi-tenant, multi-activity platform.

## Hierarchy
Platform → Activity → Tenant → Branch.

Every tenant-owned table carries a mandatory tenant_id. API authorization must derive tenant access from authenticated memberships; tenant_id supplied by a client is never sufficient authorization.

## Initial activities
Restaurant and Cafe are enabled first. Activity-specific capabilities are feature modules layered on the shared tenant core.

## First branch rule
The first branch created for a tenant is automatically the primary branch. Branch selection is unnecessary while only one branch exists.

## Public menu
Canonical public path: /menu/{tenant-slug}.

## Identity
Primary blue: #1267E8. Accent orange: #FF7A1A. Arabic is RTL-first; English and French are supported locales.
