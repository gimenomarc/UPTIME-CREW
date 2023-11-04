# Uptime-CREW

Uptime-CREW es una aplicación web que te permite supervisar la disponibilidad de tus servidores en tiempo real y visualizar su estado a través de indicadores visuales. Esta herramienta es útil para garantizar que tus servidores estén siempre en línea y responder ante problemas de conectividad.

## Tecnologías Utilizadas

El proyecto Uptime-CREW se ha desarrollado utilizando una variedad de tecnologías modernas:

- **Frontend**: La interfaz de usuario se ha construido utilizando la biblioteca React, que permite crear una experiencia de usuario interactiva y receptiva. El diseño y la presentación utilizan estilos CSS y se han aplicado clases de Tailwind CSS para facilitar la maquetación.

- **Backend**: El servidor backend se encuentra en desarrollo y se basa en Node.js, que es un entorno de tiempo de ejecución de JavaScript. Express.js se utilizará como framework para manejar rutas y solicitudes HTTP.

- **Base de Datos**: Actualmente, la base de datos está en proceso de desarrollo y aún no se ha implementado. Se espera que en futuras versiones se utilice una base de datos MongoDB. Mongoose, una biblioteca de modelado de objetos MongoDB para Node.js, facilitará la interacción con la base de datos.

- **Prueba de Ping**: La supervisión del estado del servidor se realiza mediante una biblioteca externa, ping.js. Esta biblioteca se utiliza para enviar solicitudes de ping a las direcciones IP de los servidores y determinar su estado en función de las respuestas.

## Funcionalidades Clave

- **Añadir Servidores**: Los usuarios pueden agregar servidores proporcionando un nombre y una dirección IP. Estos servidores se agregarán a la lista y se supervisarán automáticamente para verificar su disponibilidad.

- **Supervisión en Tiempo Real**: Los servidores se supervisan en tiempo real mediante pings regulares. Los servidores activos se mostrarán en verde, mientras que los inactivos se mostrarán en rojo.

- **Intervalo de Ping Personalizado**: El intervalo de ping se puede personalizar para cada servidor, lo que permite a los usuarios ajustar la frecuencia de las comprobaciones de disponibilidad.
