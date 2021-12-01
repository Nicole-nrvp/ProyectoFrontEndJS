import React from "react";

const DisneyLista = (props) => {
    return (
        <>
            <ul className="collection with-header">

                <li className="collection-header">
                   
                    <h5>Personajes <i class="fas fa-female"></i></h5>
                  
                </li>
                {
                    props.lista.map((elemento) => {
                        return (
                            <>

                                <li
                                    className="collection-item"
                                    key={elemento._id}
                                    onClick={props.actualizarDisney.bind(this, elemento)}
                                >
                                    <i class="fas fa-magic"></i>
                                    <a> </a>
                                    {elemento.nombre} {elemento.apellido}
                                </li>

                            </>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default DisneyLista