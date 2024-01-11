import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

// --- JSX imports ------
import App from "./App.jsx";

// ----- CSS for the packages -----
import "./assets/sass/base/index.scss";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";

// --- use react-redux ----
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

// ----- RTK Query imports ----------
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { apiSlice } from './features/api/apiSlice.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
