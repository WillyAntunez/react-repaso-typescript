import { useUsuarios } from '../hooks/useUsuarios';

import { Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

    const { paginaSiguiente, paginaAnterior, usuarios } = useUsuarios();

    const renderItem = ({id, first_name, email, last_name, avatar}:Usuario) => {

        const fullName: string = `${first_name} ${last_name}`;

        return (
            <tr key={ id }>
                <td>
                    <img
                        src={ avatar }
                        alt={ fullName }
                        style={{
                            width: 35,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td>{ fullName }</td>
                <td> { email } </td>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        usuarios.map( renderItem )
                    }

                </tbody>
            </table>

            <button
                className='btn btn-primary'
                onClick={ paginaAnterior }
            >
                Anteriores
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={ paginaSiguiente }
            >
                Siguientes
            </button>
        </>
    )
}
