import React, { useState, useEffect } from 'react';
import { performPing } from '../functions/ping';

function ServerStatus({ server }) {
  const [isUp, setIsUp] = useState(true);

  const pingServer = () => {
    try {
      performPing(server, setIsUp);
    } catch (error) {
      setIsUp(false);
    }
  };

  useEffect(() => {
    pingServer();
  }, []);

  useEffect(() => {
    const pingInterval = setInterval(pingServer, 5000); // Realizar ping cada 5 segundos

    return () => {
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <div className="mb-2">
      <div className={`bg-gray-700 rounded p-2 ${isUp ? 'bg-green-500' : 'bg-red-500'}`}>
        Servidor {server.name} {isUp ? '🟢' : '🔴'}
      </div>
    </div>
  );
}

export default ServerStatus;