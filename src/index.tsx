import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom'
import App from "./App";
import { Provider } from 'react-redux';
import { persistor, store } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);


