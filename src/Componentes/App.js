import './App.css'
import DisneyLista from './Disney/DisneyLista.js';
import DisneyDetalle from './Disney/DisneyDetalle.js';
import DisneyForm from './Disney/DisneyForm';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      disneys: [],
      disneyActual: {}
    }

    this.actualizarDisney = this.actualizarDisney.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:5000/disney'
    //me conecto a axios
    axios.get(url)
      .then((respuesta) => {
        //actualizar estado personas
        this.setState({
          disneys: respuesta.data,
          disneyActual: respuesta.data[0]

        })
        console.log(respuesta.data)
      })//cierra el then
      .catch((error) => { console.log(error) })//cierra el catch
  }

  //Asignar el estado: persona actual
  actualizarDisney(disney) {
    this.setState(
      {
        disneyActual: disney
      }
    )
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col s12">
            <nav className="menu">
              <div className="nav-wrapper  blue lighten-2">

                <a href="#!" className="brand-logo">Menú</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#!">Nicole Valentina Romero</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>


        <div className="row">

          <div className="col s12">
            <img className="image1"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply"
            />
          </div>

        </div>


        <div className="row">
          <div className="col s3">
            <img className="image2"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://depor.com/resizer/hfhQOQHRR9J7r38P7rBa9tuc-aU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FH2LJDEGKBDVLFRMK7N7SGJFHU.jpg"
            />
            <p>«Ten fe en tus sueños y algún día tu arco iris brillará a través de ellos.» – Cenicienta</p>
          </div>
          <div className="col s3">
            <DisneyLista
              lista={this.state.disneys}
              actualizarDisney={this.actualizarDisney}
            />
          </div>
          <div className="col s6">
            <DisneyDetalle
              disneysito={this.state.disneyActual} />
          </div>

        </div>

        <div className="row">
          <div className="col s12">
            <DisneyForm />
          </div>
        </div>

        <div className="row">
          <div className="col s3">
            <img className="image3"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://purodiseno.lat/wp-content/uploads/2021/07/ENCANTO-DESTACADA.png"
            />
            <p className=" text-lighten-4"><a href="https://www.youtube.com/watch?v=E4dCY_DvT-4">Encanto</a> </p>
          </div>
          <div className="col s3">
            <img className="image3"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/06/Clifford1.jpg?fit=1280%2C1012&ssl=1"
            />
            <p className=" text-lighten-4"> <a href="https://www.youtube.com/watch?v=-s7aW1WuOjM">Clifford</a> </p>
          </div>
          <div className="col s3">
            <img className="image3"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://purodiseno.lat/wp-content/uploads/2021/06/LUCA-3-717x1024.png"
            />
            <p className=" text-lighten-4"><a href="https://www.youtube.com/watch?v=EJk_Z-OasXc">Luca </a> </p>
          </div>
          <div className="col s3">
            <img className="image3"
              //srchttps://fotografias.antena3.com/clipping/cmsimages01/2017/04/20/42F6479B-D6AB-4C79-A13B-19A4F8509DAE/98.jpg?crop=1120,630,x0,y2&width=1900&height=1069&optimize=high&format=webply
              src="https://www.milenio.com/uploads/media/2021/07/15/donde-ver-space-jam-una.jpg"
            />
            <p className=" text-lighten-4"><a href="https://www.youtube.com/watch?v=z7PSyWuArVQ">Space Jam</a> </p>
          </div>
        </div>

        <footer className="page-footer blue lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Personajes Disney</h5>
                <p className="grey-text text-lighten-4">Realizado y editado por Nicole Romero - Ficha 2242760 - ADSI </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contacto</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="https://www.facebook.com/nicolromero2003/">
                      <i class="fab fa-facebook-square"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/nicol-romero-a56854208/">
                      <i class="fab fa-linkedin"></i>
                      Linkedin
                    </a>
                  </li>

                  <li>
                    <a className="grey-text text-lighten-3" href="https://github.com/Nicole-nrvp">
                      <i class="fab fa-github-square"></i>
                      Git Hub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="https://materializecss.com/footer.html">Materialize</a>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
