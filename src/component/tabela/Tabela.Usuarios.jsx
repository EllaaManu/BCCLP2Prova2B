import { Button, Image, Table } from "react-bootstrap";
import { useEffect } from "react";
import { buscarUsuario, deletarUsuario, atualizarUsuario } from "../../redux/redux.usuario.js";
import { useDispatch, useSelector } from "react-redux";


export default function TabelaUsuarios(props) {
    let { listaUsuarios } = useSelector((state) => state.usuarios);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarUsuario());
    }, [dispatch]);

    function atualizar(usuario) {
        if (window.confirm("Deseja realmente alterar o Usuario -> " + usuario.nickname)) {
            props.setUsuarioSelect(usuario);
            props.setModoEdicao(true);
            props.setExibirUsuarios(false);
        }
    }
    
    function deletar(usuario) {
        if (window.confirm("Deseja realmente excluir o Usuario -> " + usuario.nickname)) {
            dispatch(deletarUsuario(usuario));
        }
        }

    return (
        <>
            <Button variant="primary" onClick={() => { props.setExibirUsuarios(false) }}>
                Adicionar
            </Button>
            <p className="mt-4">Usuários Cadastrados: {listaUsuarios?.length || 0}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nickname</th>
                        <th>Avatar</th>
                        <th>Ações</th> 
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
                                    />
                                </td>
                                <td>
                                <Button onClick={() => { atualizar(item); }} variant="warning" style={{ marginRight: '1em' }}>
                                       Alterar
                                    </Button>
                                    <Button onClick={() => { deletar(item); }} variant="danger">
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
