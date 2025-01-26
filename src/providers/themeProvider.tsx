import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { ReactNode } from "react";

const theme = createTheme();

interface ThemeProviderCompProps {
  children: ReactNode;
}

const ThemeProviderComp = ({ children }: ThemeProviderCompProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComp;
