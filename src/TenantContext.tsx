import{createContext,useContext,useEffect,useState,type ReactNode}from"react";
import{api}from"./api";
export type CurrentTenant={id:string;name:string;slug:string;country_code:string;currency:string;status:string;role:string};
type TenantState={tenant:CurrentTenant|null;tenants:CurrentTenant[];loading:boolean;refresh:()=>Promise<void>;select:(slug:string)=>void};
const Context=createContext<TenantState>({tenant:null,tenants:[],loading:true,refresh:async()=>{},select:()=>{}});
export function TenantProvider({children}:{children:ReactNode}){
 const[tenants,setTenants]=useState<CurrentTenant[]>([]);
 const[tenant,setTenant]=useState<CurrentTenant|null>(null);
 const[loading,setLoading]=useState(true);
 async function refresh(){
  try{
   const r=await api.tenants();
   setTenants(r.tenants);
   const saved=localStorage.getItem("nfoodz_tenant");
   setTenant(r.tenants.find(x=>x.slug===saved)||r.tenants[0]||null);
  }catch{setTenants([]);setTenant(null)}
  finally{setLoading(false)}
 }
 useEffect(()=>{void refresh()},[]);
 function select(slug:string){const t=tenants.find(x=>x.slug===slug)||null;setTenant(t);if(t)localStorage.setItem("nfoodz_tenant",t.slug)}
 return <Context.Provider value={{tenant,tenants,loading,refresh,select}}>{children}</Context.Provider>
}
export const useTenant=()=>useContext(Context);
