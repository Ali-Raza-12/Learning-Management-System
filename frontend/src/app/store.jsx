import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import { filterReducer } from "../features/filters/filterSlice"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// 1. Combine your slices
const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
});

// 2. Create a single persisted reducer for the whole root
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "filter"],  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 3. Use that persistedReducer directly in configureStore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
