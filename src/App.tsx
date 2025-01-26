import "./App.css";
import Routes from "./routes";
import StoreProvider from "./providers/storeProvider";

function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
}

export default App;
