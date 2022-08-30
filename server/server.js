const ws = require('ws');
const wss = new ws.Server({ port: 9000 });

function onMessage(data) {
  const payload = JSON.parse(data);
  wss.clients.forEach(client => {
    if (client !== this) {
      client.send(JSON.stringify(payload));
    }
  })
}

wss.on('connection', function(wsc, request) {
  wsc.on('message', onMessage);
});
