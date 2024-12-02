import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "red" }}>
            <Nav className="justify-content-center w-100 gap-5">
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/BCCLP2Prova2B"
                        className="text-center fs-5 text-white" 
                    >
                        Menu
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/BCCLP2Prova2B/usuario"
                        className="text-center fs-5 text-white"
                    >
                        Usuários
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/BCCLP2Prova2B/chat"
                        className="text-center fs-5 text-white"
                    >
                        Bate-Papo
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

