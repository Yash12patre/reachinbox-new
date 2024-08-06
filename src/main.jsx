import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context";
import { store } from "./store";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <Auth0Provider
        domain="DOMAIN"
        clientId="CLIENT_ID"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        >
          <Provider store={store}>
          <App /> 
          </Provider>
      </Auth0Provider>
        </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
