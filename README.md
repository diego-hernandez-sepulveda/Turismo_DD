# Turismo_DD
Proyecto de Turismo para Inginieria Cilvil Informatica 


ChileTurist

 Descripción :

ChileTurist es una aplicación web Frontend interactiva que simula una agencia de viajes nacional, permitiendo a los usuarios explorar diversos destinos turísticos a lo largo de Chile, armar un itinerario de viaje calculando el presupuesto en tiempo real y gestionar una lista de lugares favoritos.

Funcionalidades Principales

- Catálogo de Destinos: Visualización de destinos por zona (Santiago, Valparaíso, La Serena, Pucón, Valdivia, Punta Arenas).
- Buscador Integrado: Permite consultar la disponibilidad de un destino en tiempo real.
- Gestión de Itinerario (Carrito): Los usuarios pueden agregar y eliminar destinos. El sistema calcula matemáticamente el monto total a pagar (CLP) y previene la duplicidad de lugares.
- Gestión de Favoritos: Permite guardar hasta un máximo de 3 lugares favoritos, con alertas de límite y opción para vaciar la lista.
- Simulación de API: Implementación de Mock Service Worker (MSW) con promesas y asincronía ("delay") para simular la carga de datos externos. (No logrado)

 Tecnologías Utilizadas
- React.js: Librería principal para la construcción de interfaces y manejo del estado ("useState", "useEffect").
- Vite: Entorno de desarrollo rápido y empaquetador del proyecto.
- React Bootstrap: Framework de CSS utilizado para el diseño de la web (Navbar, Cards, Accordions, Grid).
- Mock Service Worker (MSW): Herramienta para interceptar peticiones de red y simular un backend. (No logrado)

Instrucciones de Ejecución
Sigue estos pasos para correr el proyecto de forma local en tu máquina:

1. Clona este repositorio en tu equipo local.
2. Abre la terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando el comando:
   ```bash
   npm install