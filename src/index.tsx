import ReactDOM from 'react-dom/client';
import './index.css';
import { SnackbarProvider } from 'notistack';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    maxSnack={1}>
    <App />
  </SnackbarProvider>,
);

