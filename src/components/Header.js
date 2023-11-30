import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

function TextLinkExample({ theme, modeSwitch }) {

    return (
        <Navbar className={`${theme} mb-5`} >
            <Container>
                <Navbar.Brand href="#home" className={`${theme} fw-bold fs-3`}>Where in the world?</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <FontAwesomeIcon icon={faMoon} style={{ color: "#2b3945", }} className={theme} />
                        <Button variant="link" className={`${theme} text-decoration-none fw-bold`} style={{ color: "#2b3945", }} onClick={modeSwitch}>Dark Mode</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TextLinkExample;