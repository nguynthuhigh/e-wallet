import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Your App component

// Find the root element
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
