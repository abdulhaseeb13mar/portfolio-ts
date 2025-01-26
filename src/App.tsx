import "./App.css";
import Routes from "./routes";
import StoreProvider from "./providers/storeProvider";
import ThemeProviderComp from "providers/themeProvider";

function App() {
  return (
    <StoreProvider>
      <ThemeProviderComp>
        <Routes />
      </ThemeProviderComp>
    </StoreProvider>
  );
}

export default App;
