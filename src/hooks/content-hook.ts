import { useContext } from "react";
import { AppContext } from "../context";

export const useContent = () => {
  return useContext(AppContext).content as Record<any, any>;
};
