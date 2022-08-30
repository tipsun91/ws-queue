import { createContext, useEffect, useState } from 'react';
import { SOCKET_RECONNECTION_TIMEOUT, SOCKET_SERVER_URL } from './Constants';

const wsc = new WebSocket(SOCKET_SERVER_URL);

export const SocketContext = createContext(wsc);

export const SocketProvider = (props) => {
  const [ws, setWs] = useState(wsc);

  useEffect(() => {
    const onClose = () => {
      setTimeout(() => {
        setWs(new WebSocket(SOCKET_SERVER_URL));
      }, SOCKET_RECONNECTION_TIMEOUT);
    };

    ws.addEventListener('close', onClose);

    return () => {
      ws.removeEventListener('close', onClose);
    };
  }, [ws, setWs]);

  return (<SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>);
};
