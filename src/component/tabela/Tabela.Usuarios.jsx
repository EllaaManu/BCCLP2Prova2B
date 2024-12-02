import { Button, Image, Table } from "react-bootstrap";
import { useEffect } from "react";
import { buscarUsuario } from "../../redux/redux.usuario";
import { useDispatch, useSelector } from "react-redux";

export default function TabelaUsuarios(props) {
    let { listaUsuarios } = useSelector((state) => state.usuarios);
    const despachante = useDispatch();

    useEffect(() => {
        despachante(buscarUsuario());
    }, [despachante])

    return (
        <>
            <Button variant="primary" onClick={() => { props.setExibirUsuarios(false) }}>
                Adicionar
            </Button>
            <p className="mt-4"> Usuarios Cadastrados: {listaUsuarios?.length || 0}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nickname</th>
                        <th>Avatar</th>

                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nickname}</td>
                                <td>
                                    <Image
                                        style={{ width: "100px" }}
                                        src={item.urlAvatar}
                                        thumbnail
                                        alt="avatar"
                                    /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}