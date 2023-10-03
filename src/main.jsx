import React from 'react';
import ReactDOM from 'react-dom/client';

import ReloadPrompt from './ReloadPrompt';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <ReloadPrompt />
  </React.StrictMode>,
)
