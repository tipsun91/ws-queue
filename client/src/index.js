import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SocketProvider } from './features/SocketProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<React.StrictMode><SocketProvider><App /></SocketProvider></React.StrictMode>);
