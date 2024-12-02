import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert
            className="text-center"
            style={{
                fontSize: "3em",
                fontWeight: "700",
                //backgroundColor: "white", 
                color: "white",          
                border: "none"           
            }}
        >
            {props.titulo}
        </Alert>
    );
}
