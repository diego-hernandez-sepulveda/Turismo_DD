import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

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

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="C:\Users\danip\Documents\GitHub\Turismo_DD\app\public" />
      <Card.Body>
        <Card.Title>Santiago</Card.Title>
        <Card.Text>
          Descripción de Santiago o algo así
        </Card.Text>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Descripción
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Descripción
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>

    </div>
  );
}

export default App;