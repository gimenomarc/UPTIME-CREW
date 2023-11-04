import React, { useState, useEffect } from 'react';
import ServerStatus from './ServerStatus'; // Importa el componente ServerStatus

function Layout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serverName, setServerName] = useState('');
    const [serverIP, setServerIP] = useState('');
    const [servers, setServers] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleServerNameChange = (e) => {
        setServerName(e.target.value);
    };

    const handleServerIPChange = (e) => {
        setServerIP(e.target.value);
    };

    const addServer = () => {
        if (serverName && serverIP) {
            const newServer = {
                name: serverName,
                ip: serverIP,
                isUp: true, // Por defecto, se asume que el servidor está activo (bola verde).
            };
            setServers([...servers, newServer]);
            setServerName('');
            setServerIP('');
            closeModal();
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <header className="py-8 text-center text-3xl font-extrabold">
                UPTIME
            </header>
            <main className="p-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block mb-4"
                    onClick={openModal}
                >
                    Añadir servidor
                </button>
                <div className="w-full text-center">
                    {servers.map((server, index) => (
                        <ServerStatus key={index} server={server} />
                    ))}

                </div>
            </main>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Añadir servidor</h2>
                        <label htmlFor="serverName" className="text-black font-bold mb-2">
                            Nombre del servidor
                        </label>
                        <input
                            type="text"
                            id="serverName"
                            placeholder="Nombre del servidor"
                            value={serverName}
                            onChange={handleServerNameChange}
                            className="w-full p-2 mb-2 rounded text-black"
                        />
                        <label htmlFor="serverIP" className="text-black font-bold mb-2">
                            IP del servidor
                        </label>
                        <input
                            type="text"
                            id="serverIP"
                            placeholder="Ingrese la IP del servidor"
                            value={serverIP}
                            onChange={handleServerIPChange}
                            className="w-full p-2 mb-2 rounded text-black"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                            onClick={addServer}
                        >
                            Añadir
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Layout;