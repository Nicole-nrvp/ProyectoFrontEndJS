import React from "react";
import axios from "axios";

const DisneyDetalle = (props) => {

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card  blue lighten-2">
                    <div className="card-content white-text">

                        <span className="card-title">
                            Detalle de {props.disneysito.nombre}
                        </span>

                        <p>
                            <i class="fas fa-video"></i>
                            <a> </a>
                            Pelicula:  {props.disneysito.pelicula}
                            <br />
                            <i class="fas fa-theater-masks"></i>
                            <a> </a>
                            Personalidad:   {props.disneysito.personalidad}
                            <br />
                            <i class="fas fa-palette"></i>
                            <a> </a>
                            Color: {props.disneysito.color}
                            <br />
                            <br />
                            Estos son los datos de  {props.disneysito.nombre} 
                            personaje de Disney de la pelicula {props.disneysito.pelicula} 
                        </p>

                    </div>
                    <center>
                        <div className="card-action blue lighten-1">

                            <form onSubmit={function (event) {

                                event.preventDefault();
                                //http://localhost:5000/disney/618be73aed7120ce2ee5873d
                                const url = `http://localhost:5000/disney/${props.disneysito._id}`;
                                axios.delete(url, { data: { answer: 42 } })
                                    .then((respuesta) => console.log(respuesta.data))
                                    .catch((error) => console.log(error))
                            }}>


                                <button
                                    type="submit"
                                    name="action"
                                    className="waves-effect  blue darken-4 btn white-text ">
                                    Eliminar Personaje
                                </button><br />
                                <br />
                                <button
                                    className="waves-effect  blue lighten-2 btn white-tex ">
                                    <a className=" white-tex" href="https://www.youtube.com/watch?v=Pke4ewqV9yY">
                                        Datos Curiosos
                                    </a>
                                </button>
                            </form>

                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default DisneyDetalle