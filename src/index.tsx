import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';

import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      maxSnack={1}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
);

