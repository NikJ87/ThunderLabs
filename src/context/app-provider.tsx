import { ReactNode } from "react";
import AppContext, { AppContextProps } from "./app-context";

interface AppProviderProps extends AppContextProps {
  children: ReactNode;
}

export default function AppProvider({
  content,
  config,
  children
}: AppProviderProps) {
  return (
    <AppContext.Provider value={{ content, config }}>
      {children}
    </AppContext.Provider>
  );
}
