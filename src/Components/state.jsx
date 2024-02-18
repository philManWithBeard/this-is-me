import { createContext, useContext, useState } from "react";
import Layout from "./Layout/Layout";

export const AppStateContext = createContext({});

export function AppProvider({ children }) {
  const value = useState({});
  return (
    <Layout>
      <AppStateContext.Provider value={value}>
        {children}
      </AppStateContext.Provider>
    </Layout>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
