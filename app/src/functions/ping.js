import Ping from 'ping.js';

const performPing = (server, setIsUp) => {
  const p = new Ping();

  p.ping(server.ip)
    .then(() => {
      setIsUp(true);
    })
    .catch((error) => {
      setIsUp(false);
      console.error('Error al hacer ping:', error);
    });
};

export { performPing };
