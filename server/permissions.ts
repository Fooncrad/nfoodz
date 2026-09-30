import type{Response,NextFunction}from"express";import type{TenantRequest}from"./tenant";
export type TenantPermission="tenant.manage"|"menu.manage"|"branch.manage"|"orders.read"|"orders.manage"|"hours.manage";
const grants:Record<string,TenantPermission[]>={owner:["tenant.manage","menu.manage","branch.manage","orders.read","orders.manage","hours.manage"],manager:["menu.manage","branch.manage","orders.read","orders.manage","hours.manage"],staff:["orders.read"]};
export function requirePermission(permission:TenantPermission){return(req:TenantRequest,res:Response,next:NextFunction)=>{if(req.user?.role==="super_admin")return next();const role=req.tenantRole||"";if(!grants[role]?.includes(permission))return res.status(403).json({error:"PERMISSION_DENIED"});next()}}
