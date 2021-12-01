import React, { Component } from "react";
import axios from "axios";

class DisneyForm extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    submitNuevaDisney( event ){
        event.preventDefault();

        //hacer la petición via axios
        axios.post('http://localhost:5000/disney', 
            {
                nombre: this.refs.nombre.value, 
                apellido: this.refs.apellido.value,
                pelicula: this.refs.pelicula.value,
                personalidad: this.refs.personalidad.value,
                color: this.refs.color.value
            }
        ).then( respuesta => console.log(respuesta.data) )
         .catch( error => console.log(error) )
    }


    render() {
        return (
            <div className="row">
            <h4 className="center">Nuevo Personaje</h4>
            <br />
            <form className="col s12"  onSubmit={ this.submitNuevaDisney.bind(this) }   >
                <div className="row">

                    <div className="input-field col s6">
                        <label htmlFor="nombre">Nombre: </label>
                        <input placeholder="Ingrese su nombre" id="nombre" ref="nombre" type="text" />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="apellido">Apellido: </label>
                        <input placeholder="Ingrese su apellido" id="apellido" ref="apellido" type="text" />
                    </div>

                </div>

                <div className="row">

                    <div className="input-field col s6">
                        <label htmlFor="pelicula">Pelicula: </label>
                        <input placeholder="Ingrese la pelicula" id="pelicula" ref="pelicula" type="text" />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="personalidad">Personalidad: </label>
                        <input placeholder="Ingrese la personalidad" id="personalidad" ref="personalidad" type="text" />
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <label htmlFor="color">Color: </label>
                        <input placeholder="Ingrese el color" id="color" ref="color" type="text" />
                        
                    </div>
                    <div className="input-field col s6">
                        <button 
                            className="btn waves-effect blue lighten-2" 
                            type="submit" 
                            name="action">
                                Registrar Personaje
                            <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>

            </form>
        </div>
        )
    }
}

export default DisneyForm