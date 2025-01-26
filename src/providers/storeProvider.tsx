import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { store, persister } from "Store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
