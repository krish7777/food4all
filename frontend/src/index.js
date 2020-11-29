import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from "./store"

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  // dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        {/* <React.StrictMode> */}
        {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme="light"> */}
        <App />
        {/* </ThemeSwitcherProvider> */}
        {/* </React.StrictMode> */}
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
