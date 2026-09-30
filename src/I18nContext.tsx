import{createContext,useContext,useEffect,useMemo,useState,type ReactNode}from"react";import{applyLocale,initialLocale,localeNames,messages,type Locale}from"./i18n";
type Dict=typeof messages.ar;type Key=keyof Dict;
type I18nState={locale:Locale;dir:"rtl"|"ltr";setLocale:(locale:Locale)=>void;t:(key:Key)=>string;localeNames:typeof localeNames};
const C=createContext<I18nState|null>(null);
export function I18nProvider({children}:{children:ReactNode}){const[locale,setLocale]=useState<Locale>(initialLocale);useEffect(()=>applyLocale(locale),[locale]);const value=useMemo<I18nState>(()=>({locale,dir:locale==="ar"?"rtl":"ltr",setLocale,t:(key)=>messages[locale][key],localeNames}),[locale]);return <C.Provider value={value}>{children}</C.Provider>}
export function useI18n(){const v=useContext(C);if(!v)throw new Error("I18nProvider missing");return v}
