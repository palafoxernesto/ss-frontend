import React, { Component } from 'react'
import styled from 'styled-components'
import Headss from '../components/head'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'
const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Slider extends Component{
  handleSubmit(){
    
  }
  render(){
    return(
      <main id="admin-anuncios">
        <Headss/>
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						<div className="back"><a href="#"><img src="../static/back.svg"/><span>atrás</span></a></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Sliders</h1></div>
                <form className="col-md-12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="number-anuncio">1</span>
                      <div className="inputs">
                        <span className="inputs-title">Nombre</span><br/>
                        <div className="inputs-group">
                          <input type="text"></input><span> Max. 30 caracteres</span>
                        </div>
                        <div className="inputs-group">
                          <select name="select">
                            <option selected hidden>Seleccionar categoría hijo</option>
                            <option value="sofas">Sofas</option>
                            <option value="sillones">Sillones</option>
                            <option value="mesas">Mesas</option>
                          </select>
                        </div>
                        <span className="inputs-title">Descripción</span><br/>
                        <div className="inputs-group">
                          <input type="text"></input><span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">Medidas</span><br/>
                        <div className="inputs-group">
                          <input type="text"></input>
                        </div>
                      </div>
                    </div>
    							  <div className="col-md-6">

    					       <div className="new-item-anuncio">
                     <span className="inputs-title">Agregar color</span><br/>
                     <div className="inputs-group">
                       <input type="text"></input>
                     </div>
                       <h2>Imagen slider</h2>
                       <button>Seleccionar archivo</button>
                       <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                     </div>
                    </div>
                  </div>
                </form>

                <button className="save">Guardar</button>
  						</div>
  					</div>
  				</div>
  			</div>
      </main>

    )
  }
}
