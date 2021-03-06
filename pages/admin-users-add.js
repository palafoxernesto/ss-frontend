import React, { Component } from 'react'
import styled from 'styled-components'
import Headss from '../components/head'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'
import fetch from 'isomorphic-fetch'
import { createUser } from './api-admin.js'
import Link from 'next/link'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Slider extends Component{

  state = {
    email: '',
    password: ''
  }

  handleSubmit(ev){
    ev.preventDefault();

    createUser( this.state)
    .then( (r) =>{
      console.log(r);
    });

  }
  render(){
    return(
      <main id="admin-anuncios">
        <Headss/>
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						<div className="back"><Link href="/admin-users"><a><img src="../static/back.svg"/><span>atrás</span></a></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Agregar Usuario</h1></div>
                <form className="col-md-12" onSubmit={ (ev) => { this.handleSubmit(ev) }}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="inputs">
                        <span className="inputs-title">Correo</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.email } onChange={ (res) => { this.setState({ email: res.target.value }) } } />
                        </div>
                      </div>
                      <div className="inputs">
                        <span className="inputs-title">Contraseña</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.password } onChange={ (res) => { this.setState({ password: res.target.value }) } } />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="save" type="submit">CREAR</button>
                </form>
              </div>
  					</div>
  				</div>
  			</div>
      </main>

    )
  }
}
