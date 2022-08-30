import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../features/useSocket';
import Display from './Display';
import Terminal from './Terminal';
import { DEVICE_TERMINAL, EVENT_GET_IN_LINE } from '../features/Constants';

function Device() {
  const { device, channel } = useParams();
  const socket = useSocket();
  const [queue, updateQueue] = useState([]);

  const onMessage = useCallback(message => {
    const payload = JSON.parse(message.data);
    if (payload.event === EVENT_GET_IN_LINE
      && payload.data.channel === channel) {
      updateQueue(p => {
        return p.concat('Row');
      });
    }
  }, [queue]);

  useEffect(() => {
    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket, onMessage]);

  return (
    device === DEVICE_TERMINAL ? <Terminal channel={channel} updateQueue={updateQueue} /> : <Display channel={channel} queue={queue} />
  );
}

export default Device;
