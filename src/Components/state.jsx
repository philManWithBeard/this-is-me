import { createContext, useContext, useState } from "react";
import Layout from "./Layout/Layout";

// allow components to share state without propdrilling
export const AppStateContext = createContext({});

export function AppProvider({ children }) {
  // the value that we want to share amongst components
  const value = useState({});
  return (
    // Wrap all pages in the layout
    <Layout>
      {/* Wrap all pages in the context provider, set value prop to share amongst components */}
      <AppStateContext.Provider value={value}>
        {children}
      </AppStateContext.Provider>
    </Layout>
  );
}

// Function to allow components to use context (App) state
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
