import { useCallback } from 'react';
import { useSocket } from '../features/useSocket';
import { EVENT_GET_IN_LINE } from '../features/Constants';

function Terminal(props) {
  const { channel } = props;
  const socket = useSocket();
  const clickHandler = useCallback(() => {
    socket.send(JSON.stringify({
      event: EVENT_GET_IN_LINE,
      data: {
        channel
      }
    }));
  }, []);

  return (
    <div className='terminal'>
      <p>Terminal with channel={channel}</p>
      <p><button onClick={clickHandler}>Встать в очередь</button></p>
    </div>
  );
}

export default Terminal;
