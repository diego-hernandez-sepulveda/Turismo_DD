import { useState } from 'react';
import { createRoot } from 'react-dom/client';
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

  const [destino, elegirDestino] = useState([]);

  const agregarDestino = (nuevoLugar) => {
    if (!destino.includes(nuevoLugar)) {
      elegirDestino([...destino, nuevoLugar]);
    }
  };

  const vaciarItinerario = () => {
    elegirDestino([]);
  };


  const[favoritos, mostrarFavoritos] = useState([]);

  const agregarFavorito = (lugarFavorito) => {
    if (!favoritos.includes(lugarFavorito)) {
      mostrarFavoritos([...favoritos, lugarFavorito]);
    }
  };

  const vaciarFavoritos = () => {
    mostrarFavoritos([]);
  };


  return (
    <div className="p-5">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Destinos</Nav.Link>
              <Nav.Link href="#conocenos">Más</Nav.Link>
              <NavDropdown title="Más servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Transporte</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Guías</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lugares Favoritos</NavDropdown.Item>
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
            <h3>El mejor servicio turístico de Chile</h3>
          </Col>
          <Col md={7}>
            <Form.Label className="mb-2 text-muted">Busca si está disponible:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            
            
            {busqueda !== '' && (
              <div className="mt-3 p-2 bg-light rounded border">
                {lugarExiste ? (
                  <span className="fw-bold text-success">Destino Disponible: {busqueda}</span>
                ) : (
                  <span className="fw-bold text-danger"> El destino "{busqueda}" no está disponible.</span>
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
            <Card.Text>
              Santiago, la capital y la ciudad más grande de Chile, está ubicada en un valle rodeado 
              por la nevada cordillera de los Andes y la Cordillera de la Costa. La ciudad alberga los 
              principales organismos públicos, comerciales, culturales y financieros del país.
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Palacio de La Moneda</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago palaciodelamoneda.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Coloquialmente conocido como La Moneda, este magestuoso edificio se trata de la 
                    sede del Gobierno de Chile y residencia del presidente de la República de Chile.
                    También alberga la Secretaría General de la Presidencia y a la Secretaría General 
                    de Gobierno.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Palacio de La Moneda")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Palacio de La Moneda")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Parque Bicentenario de Vitacura</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago parquebicentenario.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Ubicado junto al río Mapocho y el barrio financiero, es un espacio ideal para pasar 
                    la tarde, estés solo o acompañado. Cuenta con dos lagunas, donde habitan todo tipo 
                    de aves nativas, ofrece un atractivo espectáculo natural. Además, el parque integra 
                    un espacio cultural con esculturas de destacados artistas nacionales, juegos infantiles 
                    y senderos con miradores para disfrutar al aire libre.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Parque Bicentenario de Vitacura")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Parque Bicentenario de Vitacura")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Museo Nacional de Bellas Artes</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago museonacional.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    El Museo Nacional de Bellas Artes es uno de los principales y más importantes 
                    centros de difusión de las artes visuales en Chile. Fue fundado en 1880, donde 
                    en aquel entonces se le conocía como el Museo Nacional de Pinturas, es el primer 
                    museo de arte en Latinoamérica.​
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Museo Nacional de Bellas Artes")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Museo Nacional de Bellas Artes")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cerro San Cristóbal</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Santiago cerrosancristobal.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Con una imponente altitud de 880 m s. n. m. El cerro San Cristóbal es el cuarto 
                    punto más alto de Santiago y el principal pulmón verde de la ciudad. Aquí se 
                    pueden encontrar áreas recreativas, paseo en funicular, el zoológico nacional de 
                    Santiago y su mayor atractivo, el santuario de la Virgen.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Cerro San Cristóbal")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Cerro San Cristóbal")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/webp" src="/Valparaiso.webp"/>
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
                  <Row className="align-items-center">
                  <Col> 
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso plazasotomayor.jpg"/>
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    El corazón cívico e histórico de la ciudad. Rodeada de imponentes edificios 
                    patrimoniales como el de la Comandancia en Jefe de la Armada, alberga el Monumento a 
                    los Héroes de Iquique y funciona como el umbral directo al movimiento portuario del 
                    Muelle Prat. 
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Plaza Sotomayor")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Plaza Sotomayor")}>❤️</Button>
                  </Col>
                  </Row>            
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Cerro Alegre</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso cerroalegre.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Uno de los cerros más emblemáticos y visitados. Se distingue por su arquitectura de 
                    influencia europea del siglo XIX, cafés de especialidad, galerías de arte, pasajes 
                    adoquinados y murales en cada esquina con vistas privilegiadas a la bahía.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Cerro Alegre")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Cerro Alegre")}>❤️</Button>
                  </Col>
                  </Row> 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Palacio Baburizza</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Valparaiso Palaciobaburizza.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Antigua residencia modernista construida en 1916 en el Cerro Alegre (frente al Paseo 
                    Yugoslavo), hoy sede del Museo Municipal de Bellas Artes. Destaca tanto por su 
                    arquitectura y torre mirador como por su valiosa colección de pintura chilena y europea.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Palacio Baburizza")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Palacio Baburizza")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/jpg" src="/Destino La Serena.jpg" />
          <Card.Body>
            <Card.Title>La Serena</Card.Title>
              <Card.Text>
                La Serena, la ciudad colonial, ubicada en la costa de la provincia del Elqui 
                conocida por sus extensas playas de blanca arena, es la capital de la región de Coquimbo 
                y uno de los principales centros urbanos y turísticos del norte chico de Chile.
              </Card.Text>                
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Faro La Serena</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/La Serena elfaro.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    El emblemático Faro de La Serena se ubica en la playa que lleva su mismo nombre en 
                    la Avenida del Mar. La estructura se caracteriza por ser el símbolo de reconocimiento 
                    público de la ciudad, siendo uno de los lugares turísticos más representativos y 
                    concurridos de la zona.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Faro La Serena")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Faro La Serena")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>La Recova</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/La Serena larecova.webp" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                  La Recova es uno de los puntos más icónicos de la ciudad, se trata del mercado municipal,
                  fundado en 1758, este lugar alberga todo tipo de productos locales, desde joyería y cerámica
                  hasta gastronomía típica.
                  </Card.Text>
                  <Button variant="outline-secondary"  onClick={() => agregarDestino("La Recova")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("La Recova")}>❤️</Button>
                  </Col>
                  </Row> 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Jardín Japonés La Serena</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/La Serena jardinjapones.webp" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Un oasis de paz y contemplación en pleno corazón de la ciudad. Este parque temático ofrece un paisaje armónico con senderos, lagunas con carpas koi y puentes tradicionales.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Jardín Japonés La Serena")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Jardín Japonés La Serena")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/jpeg" src="/Destino Pucón.jpeg" />
          <Card.Body>
            <Card.Title>Pucón</Card.Title>
            <Card.Text>El epicentro indiscutido de la aventura, la naturaleza y la desconexión en el sur de Chile. Custodiado por el imponente e icónico volcán Villarrica, Pucón es un destino vibrante donde la adrenalina y el relajo convergen a la perfección.</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Plaza de Armas de Pucón</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Pucón plazadearmas.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Es un verdadero jardín botánico urbano. Destaca por su cuidado paisajismo, enormes árboles que ofrecen una sombra perfecta en verano, coloridas flores y hermosas esculturas talladas en madera nativa que le dan ese inconfundible toque sureño.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Plaza de Armas de Pucón")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Plaza de Armas de Pucón")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Parque Ojos del Caburgua</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Pucón paqueojosdelcaburgua.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Un espectáculo visual fascinante. Lo más impresionante es el color turquesa intenso y vibrante de sus pozones y cascadas, un tono hipnótico que resalta entre la espesura del bosque húmedo que lo rodea. Es un lugar excelente para ir en bicicleta desde Pucón, hacer un picnic en los alrededores y simplemente escuchar el sonido relajante de la corriente.
                  </Card.Text>
                  <Button variant="outline-secondary"  onClick={() => agregarDestino("Parque Ojos del Caburgua")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Parque Ojos del Caburgua")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Parque Nacional Huerquehue</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Pucón paquenacionalhuerquehue.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Es el paraíso definitivo para el trekking.Su paisaje de alta montaña es sobrecogedor. A medida que subes, el bosque se transforma hasta revelarte milenarias araucarias. También puedes acampar en el sector del lago Tinquilco y desconectarte por completo del mundo.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Parque Nacional Huerquehue")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Parque Nacional Huerquehue")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/jpg" src="/Valdivia.jpg"/>
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
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Valdivia costanera.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                   El paseo imperdible por excelencia. Bordeando los ríos Calle-Calle y Valdivia, esta 
                   extensa ruta peatonal ofrece vistas panorámicas, paseos fluviales y un ambiente relajado. 
                   Aquí encontrarás el colorido y tradicional Mercado Fluvial, resguardado por los icónicos 
                   lobos marinos que descansan al sol.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Costanera de Valdivia")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Costanera de Valdivia")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Museo Histórico y Antropológico Maurice van de Maele</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Valdivia museo.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                   Ubicado en la pintoresca Isla Teja, al interior de la patrimonial Casa Anwandter, este 
                   museo es un verdadero viaje en el tiempo. Sus colecciones permiten sumergirse en la 
                   historia de la región, abarcando desde el profundo legado de las culturas mapuche y 
                   huilliche hasta el impacto de la colonización europea.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Museo Histórico y Antropológico Maurice van de Maele")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Museo Histórico y Antropológico Maurice van de Maele")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Parque Oncol</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpeg" src="/Valdivia parque.jpeg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                  Un santuario natural de biodiversidad ubicado en la cordillera de la Costa. Este parque 
                  es el refugio perfecto para los amantes del trekking y la Selva Valdiviana. Sus senderos 
                  rodeados de árboles milenarios conducen a impresionantes miradores desde donde se 
                  puede contemplar el Océano Pacífico y, en días despejados, la línea de los volcanes de los 
                  Andes.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Parque Oncol")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Parque Oncol")}>❤️</Button>
                  </Col>
                  </Row>             
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" type="image/jpg" src="/Punta Arenas.jpg"/>
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
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img type="image/jpg" src="/Punta Arenas plazadearmas.jpg" rounded />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    El núcleo histórico y social de la ciudad. Está rodeada de imponentes palacios de estilo 
                    europeo y centenarios árboles. En su centro se alza el imponente monumento a Hernando 
                    de Magallanes; la leyenda local asegura que debes tocar el dedo del indígena Aónikenk en 
                    su base si quieres volver a la ciudad en el futuro.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Plaza de Armas Muñoz Gamero")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Plaza de Armas Muñoz Gamero")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Museo Nao Victoria</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Punta Arenas museo.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                    Una experiencia histórica interactiva a orillas del estrecho. Este museo exhibe réplicas 
                    a escala real de embarcaciones legendarias que marcaron la historia de la región, 
                    destacando la Nao Victoria, la nave de la expedición de Magallanes que logró completar la 
                    primera vuelta al mundo. Ideal para sentirse un explorador del siglo XVI.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Museo Nao Victoria")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Museo Nao Victoria")}>❤️</Button>
                  </Col>
                  </Row>                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cementerio Municipal Sara Braun</Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center">
                  <Col>
                  <Card.Img variant="top" type="image/jpg" src="/Punta Arenas cementerio.jpg" />
                  </Col>
                  <Col>
                  <Card.Text className="mb-2 text-muted">
                  Reconocido internacionalmente como uno de los cementerios más hermosos del 
                  mundo y declarado Monumento Nacional. Destaca por sus inmaculados senderos 
                  bordeados de cipreses europeos perfectamente podados y los fastuosos mausoleos de las 
                  familias pioneras, siendo un verdadero museo arquitectónico al aire libre.
                  </Card.Text>
                  <Button variant="outline-secondary" onClick={() => agregarDestino("Cementerio Municipal Sara Braun")}>Quiero ir</Button>
                  <Button variant="outline-warning" onClick={() => agregarFavorito("Cementerio Municipal Sara Braun")}>❤️</Button>
                  </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>
      
      <div className="mt-4 mb-5">
      <Row className="align-items-center">
        <Col>
          <h3>¿Ya sabes a donde ir? </h3>
          <Card.Text className="mb-1">
            Revisa tu itinerario, puedes hacer los cambios que desees antes de confirmar.
            
            <h4>Itinerario de viaje:</h4>
      
           <p>Lugares guardados: <strong>{destino.length}</strong></p>
         
           <ul id="listaCarrito" className="list-group mb-3">
            {destino.map((lugar, index) => (
              <li key={index} className="list-group-item ">
                {lugar}
              </li>
            ))}
          </ul>  
         
          </Card.Text>
          <Card.Text> 
          </Card.Text>        
        </Col>
        <Col md={8}>
          <Button variant="outline-dark">Confirmar</Button> 
          <Button variant="outline-danger" onClick={vaciarItinerario}>Vaciar Itinerario</Button>
        </Col>
        <Col md={6}>
          <h4>Lugares Favoritos❤️ :</h4>
          <p>Favoritos guardados: <strong>{favoritos.length}</strong></p>
          <ul className="list-group mb-3">
            {favoritos.map((lugarFavorito, index) => (
              <li key={index} className="list-group-item-warning">
                {lugarFavorito}
              </li>
            ))}
          <Col md={6}>
            <Button variant="outline-danger" onClick={vaciarFavoritos}>Vaciar Favoritos</Button>
          </Col>
          </ul>
        </Col>
      </Row>
      </div>

    </div>
  );
}