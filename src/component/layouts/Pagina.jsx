import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <Container className="w-100">
            <Cabecalho titulo="BCC LP2 Prova 2B" />
            <Menu />
            {props.children}
        </Container>
    );
}