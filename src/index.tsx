import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import './localization/i18n';
import './index.scss';
import './scss/fonts.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div className="m-5">Loading...</div>}>
        <ToastContainer />
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
