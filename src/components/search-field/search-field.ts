import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import {
  mediaMaxLg,
  mediaMaxMd,
  MUI_FORM_HELPERTEXT,
  MUI_FORM_LABEL
} from "../style.constants";

export const StyledTextField = styled(TextField)`
  --var-width-100p: 100%;
  --var-width-450x: 450px;
  --var-no-marging: 0;

  max-width: var(--var-width-450x);
  width: var(--var-width-450x);

  ${MUI_FORM_LABEL} {
    padding: 0px 10px 0px 0px;
  }

  ${MUI_FORM_HELPERTEXT} {
    margin-left: 5px;
    margin-right: var(--var-no-marging);
  }

  ${mediaMaxLg} {
    width: calc(var(--var-width-100p) - 10px);
  }

  ${mediaMaxMd} {
    width: var(--var-width-100p);
  }
`;

export const StyledAutocomplete = styled(Autocomplete)`
  --var-width-100p: 100%;
  width: calc(var(--var-width-100p) - 106px);
  ${mediaMaxMd} {
    width: calc(var(--var-width-100p) - 85px);
  }
`;
