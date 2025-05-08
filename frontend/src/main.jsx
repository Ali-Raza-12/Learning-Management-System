import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, Persistor } from "./app/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { CourseProvider } from "./context/CourseContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <CourseProvider>
        <App />
      </CourseProvider>
    </PersistGate>
  </Provider>
);
