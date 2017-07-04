import React, { Component } from 'react'
import styled from 'styled-components'
import Headss from '../components/head'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'

import { createCategory } from './api-admin.js'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Slider extends Component{

  image = ''
  state = {
    name: '',
  }

  handleSubmit(ev){
    ev.preventDefault();

    createCategory( this.state)
    .then( (r) =>{
      console.log(r);
    });

  }
  handleImageChange(ev){

    ev.preventDefault;
    let reader = new FileReader();
    let file = ev.target.files[0];
    this.image = file ;

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
                <form className="col-md-12" onSubmit={ (ev) => { this.handleSubmit(ev) }}>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="number-anuncio">1</span>
                      <div className="inputs">
                        <span className="inputs-title">Nombre</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.name } onChange={ (res) => { this.setState({ name: res.target.value }) } } />
                          <span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">Archivo</span><br/>
                        <div className="inputs-group">
                          <input type="file" onChange={ (res) => { this.handleImageChange(res) }} />
                        </div>

                      </div>
                    </div>
                  </div>
                  <button className="save" type="submit">Guardar</button>
                </form>

                {/* <input value="Guardar" type="submit" /> */}
  						</div>
  					</div>
  				</div>
  			</div>
      </main>

    )
  }
}
