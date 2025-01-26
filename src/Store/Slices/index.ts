import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import app from "Store/Slices/app";

const persistConfig = {
  version: 1,
  key: "lumina-ts",
  storage,
  whitelist: [],
};

const reducers = combineReducers({
  app,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
