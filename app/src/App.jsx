import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  
  const [busqueda, setBusqueda] = useState('');
  
  const lugaresEnLaPagina = ['santiago', 'valparaíso', 'valparaiso', 'valdivia', 'punta arenas', 'palacio de la moneda', 'parque bicentenario de vitacura', 'museo nacional de bellas artes', 'cerro san cristóbal', 'plaza sotomayor', 'cerro alegre', 'palacio baburizza', 'costanera de valdivia', 'museo historico y antropologico maurice van de maele', 'parque oncol', 'plaza de armas muñoz gamero', 'museo nao victoria', 'cementerio municipal sara braun'];
  
  const lugarExiste = lugaresEnLaPagina.includes(busqueda.toLowerCase().trim());

  return (
    <div className="p-5">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Destinos</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Buscador" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="mt-4 mb-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1>ChileTurist</h1>
            <h3>El mejor país de Chile</h3>
          </Col>
          <Col md={7}>
            <Form.Label className="fw-bold">Busca si está disponible:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            
            
            {busqueda !== '' && (
              <div className="mt-3 p-2 bg-light rounded border">
                {lugarExiste ? (
                  <span className="fw-bold text-success">Lugar Disponible: {busqueda}</span>
                ) : (
                  <span className="fw-bold text-danger"> El lugar "{busqueda}" no está disponible.</span>
                )}
              </div>
            )}
          </Col>
        </Row>
      </div>
      
      <CardGroup>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Destino Santiago.webp" />
          <Card.Body>
            <Card.Title>Santiago</Card.Title>
            <Card.Text>Descripción de Santiago o algo así</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Palacio de La Moneda</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago palaciodelamoneda.jpg" />
                  El palacio...
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Parque Bicentenario de Vitacura</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago parquebicentenario.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Museo Nacional de Bellas Artes</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago museonacional.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cerro San Cristóbal</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago cerrosancristobal.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Valparaiso.webp" />
          <Card.Body>
            <Card.Title>Valparaíso</Card.Title>
            <Card.Text>
              Conocida como la "Joya del Pacífico" y declarada Patrimonio de la Humanidad por la 
              UNESCO, Valparaíso es un anfiteatro natural frente al mar famoso por su arquitectura en 
              pendiente, ascensores históricos y coloridos murales. Una ciudad artistica y marítima que 
              invita a perderse caminando por sus callejones y escaleras llenas de historia y arte urbano. 
              </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plaza Sotomayor</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso plazasotomayor.jpg" />
                  El corazón cívico e histórico de la ciudad. Rodeada de imponentes edificios 
                  patrimoniales como el de la Comandancia en Jefe de la Armada, alberga el Monumento a 
                  los Héroes de Iquique y funciona como el umbral directo al movimiento portuario del 
                  Muelle Prat. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Cerro Alegre</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso cerroalegre.jpg" />
                  Uno de los cerros más emblemáticos y visitados. Se distingue por su arquitectura de 
                  influencia europea del siglo XIX, cafés de especialidad, galerías de arte, pasajes 
                  adoquinados y murales en cada esquina con vistas privilegiadas a la bahía. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Palacio Baburizza</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso Palaciobaburizza.jpg" />
                  Antigua residencia modernista construida en 1916 en el Cerro Alegre (frente al Paseo 
                  Yugoslavo), hoy sede del Museo Municipal de Bellas Artes. Destaca tanto por su 
                  arquitectura y torre mirador como por su valiosa colección de pintura chilena y europea.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Destino Santiago.webp" />
          <Card.Body>
            <Card.Title>Santiago</Card.Title>
            <Card.Text>Descripción de Santiago o algo así</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Palacio de La Moneda</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago palaciodelamoneda.jpg" />
                  El palacio...
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Parque Bicentenario de Vitacura</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago parquebicentenario.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Museo Nacional de Bellas Artes</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago museonacional.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cerro San Cristóbal</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago cerrosancristobal.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Valparaiso.webp" />
          <Card.Body>
            <Card.Title>Valparaíso</Card.Title>
            <Card.Text>Descripción de Valparaíso o algo así</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plaza Sotomayor</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso plazasotomayor.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Cerro Alegre</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso cerroalegre.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Palacio Baburizza</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso Palaciobaburizza.jpg" />
                  Descripción
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/jpg" src="/Valdivia.jpg" />
          <Card.Body>
            <Card.Title>Valdivia</Card.Title>
            <Card.Text>
                 Conocida como la "Perla del Sur", Valdivia es una de las ciudades más hermosas y 
                antiguas de Chile. Rodeada por una red de ríos navegables y la imponente selva valdiviana, 
                esta ciudad destaca por su rica herencia cultural, su marcada arquitectura de influencia 
                alemana y su inigualable tradición cervecera. Es un destino mágico donde la naturaleza 
                vibrante y la historia convergen en cada rincón.
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Costanera de Valdivia</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valdivia costanera.jpg" />
                   El paseo imperdible por excelencia. Bordeando los ríos Calle-Calle y Valdivia, esta 
                   extensa ruta peatonal ofrece vistas panorámicas, paseos fluviales y un ambiente relajado. 
                   Aquí encontrarás el colorido y tradicional Mercado Fluvial, resguardado por los icónicos 
                   lobos marinos que descansan al sol.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Museo Histórico y Antropológico Maurice van de Maele</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Valdivia museo.jpg" />
                   Ubicado en la pintoresca Isla Teja, al interior de la patrimonial Casa Anwandter, este 
                   museo es un verdadero viaje en el tiempo. Sus colecciones permiten sumergirse en la 
                   historia de la región, abarcando desde el profundo legado de las culturas mapuche y 
                   huilliche hasta el impacto de la colonización europea.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Parque Oncol</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpeg" src="/Valdivia parque.jpeg" />
                  Un santuario natural de biodiversidad ubicado en la cordillera de la Costa. Este parque 
                  es el refugio perfecto para los amantes del trekking y la Selva Valdiviana. Sus senderos 
                  rodeados de árboles milenarios conducen a impresionantes miradores desde donde se 
                  puede contemplar el Océano Pacífico y, en días despejados, la línea de los volcanes de los 
                  Andes.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Punta Arenas.webp" />
          <Card.Body>
            <Card.Title>Punta Arenas</Card.Title>
            <Card.Text>
               Conocida como la "Capital de la Patagonia Chilena" y la principal puerta de entrada al 
               continente antártico. Ubicada a orillas del mítico Estrecho de Magallanes, esta ciudad 
               heredada de la época del auge ganadero y su inconfundible viento. Es un destino 
              fascinante donde verdaderamente se siente la magia del fin del mundo.
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plaza de Armas Muñoz Gamero</Accordion.Header>
                <Accordion.Body>
                  <Card.Img type="image/jpg" src="/Punta Arenas plazadearmas.jpg" rounded />
                    El núcleo histórico y social de la ciudad. Está rodeada de imponentes palacios de estilo 
                    europeo y centenarios árboles. En su centro se alza el imponente monumento a Hernando 
                    de Magallanes; la leyenda local asegura que debes tocar el dedo del indígena Aónikenk en 
                    su base si quieres volver a la ciudad en el futuro.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Museo Nao Victoria</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Punta Arenas museo.jpg" />
                    Una experiencia histórica interactiva a orillas del estrecho. Este museo exhibe réplicas 
                    a escala real de embarcaciones legendarias que marcaron la historia de la región, 
                    destacando la Nao Victoria, la nave de la expedición de Magallanes que logró completar la 
                    primera vuelta al mundo. Ideal para sentirse un explorador del siglo XVI. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cementerio Municipal Sara Braun</Accordion.Header>
                <Accordion.Body>
                  <Card.Img variant="top" type="image/jpg" src="/Punta Arenas cementerio.jpg" />
                  Reconocido internacionalmente como uno de los cementerios más hermosos del 
                  mundo y declarado Monumento Nacional. Destaca por sus inmaculados senderos 
                  bordeados de cipreses europeos perfectamente podados y los fastuosos mausoleos de las 
                  familias pioneras, siendo un verdadero museo arquitectónico al aire libre.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
  );
}