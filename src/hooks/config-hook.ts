import { useContext } from "react";
import { AppContext } from "../context";

export const useConfig = () => {
  return useContext(AppContext).config as Record<any, any>;
};
