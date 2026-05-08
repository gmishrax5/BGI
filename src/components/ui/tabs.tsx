"use client";
import * as React from "react";

const TabsContext = React.createContext<{ value: string; setValue: (v: string) => void } | null>(null);

export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue);
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>;
}

export function TabsList({ children }: { children: React.ReactNode }) { return <div className="inline-flex rounded-lg bg-[#DDDFEE] p-1">{children}</div>; }
export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;
  const active = ctx.value == value;
  return <button onClick={() => ctx.setValue(value)} className={`rounded-md px-3 py-1.5 text-sm ${active ? "bg-white text-[#40415D]" : "text-[#6B6E9A]"}`}>{children}</button>;
}
export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <div className="mt-3">{children}</div>;
}
