import { createContext } from "react";

export interface AppContextProps {
  content: unknown;
  config: unknown;
}

const AppContext = createContext<AppContextProps>({
  content: undefined,
  config: undefined
});

export default AppContext;
