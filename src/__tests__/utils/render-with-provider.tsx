import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { AppProvider } from "../../context";
import { content } from "../../commons";
import { config } from "../../commons";

export const renderWithProvider = (ui: ReactElement) => {
  const withProvider = <AppProvider {...{ content, config }}>{ui}</AppProvider>;
  return render(withProvider);
};
