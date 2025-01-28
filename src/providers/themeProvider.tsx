import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f74458" },
    secondary: { main: "#f74458" },
  },
});

interface ThemeProviderCompProps {
  children: ReactNode;
}

const ThemeProviderComp = ({ children }: ThemeProviderCompProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComp;
