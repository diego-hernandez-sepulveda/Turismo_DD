import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
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
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h1>ChileTurist</h1>
      <h3>El mejor país de Chile</h3>

    <CardGroup>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" type="image/webp" src="/Destino Santiago.webp" />
      <Card.Body>
        <Card.Title>Santiago</Card.Title>
        <Card.Text>
          Descripción de Santiago o algo así
        </Card.Text>
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
          Descripción de Valparaíso o algo así
        </Card.Text>
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
      <Card.Img variant="top" type="image/webp" src="/Destino La Serena.webp" />
      <Card.Body>
        <Card.Title>La Serena</Card.Title>
        <Card.Text>
          Descripción de Santiago o algo así
        </Card.Text>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Faro La Serena</Accordion.Header>
        <Accordion.Body>
          <Card.Img variant="top" type="image/jpg" src="/Santiago palaciodelamoneda.jpg" />
          El palacio...
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>La Recova</Accordion.Header>
        <Accordion.Body>
          <Card.Img variant="top" type="image/jpg" src="/Santiago parquebicentenario.jpg" />
          Descripción
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Jardín Japonés La Serena</Accordion.Header>
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
          Descripción de Valparaíso o algo así
        </Card.Text>
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
      <Card.Img variant="top" type="image/webp" src="/Destino Santiago.webp" />
      <Card.Body>
        <Card.Title>Santiago</Card.Title>
        <Card.Text>
          Descripción de Santiago o algo así
        </Card.Text>
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
          Descripción de Valparaíso o algo así
        </Card.Text>
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

    </div>
  );
}

export default App;