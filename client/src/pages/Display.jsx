function Display(props) {
  const { channel, queue } = props;

  return (
    <div>
      <p>Display with channel={channel}</p>
      <ul>
        {queue ? queue.map(i => <li>{i}</li>) : <li>Пусто</li>}
      </ul>
    </div>
  );
}

export default Display;
