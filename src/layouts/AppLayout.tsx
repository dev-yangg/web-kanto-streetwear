import React, { ReactNode } from "react";
import AppHeader from "../components/AppHeader";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
