import React, { Component } from 'react'
import styled from 'styled-components'
import Headss from '../components/head'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'
import fetch from 'isomorphic-fetch'
import { createCategory } from './api-admin.js'
import Link from 'next/link'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Slider extends Component{

  constructor(props){
    super(props);
    this.state = {data: [],
      name: '',
      subcategoria: ''
  };
  }
  image = ''
  

  handleSubmit(ev){
    ev.preventDefault();

    if(document.getElementById('hijo').checked){
      createCategory( {name: this.state.subcategoria , sub:this.state.name})
        .then( (r) =>{
          console.log(r);
        });
    }else{
      createCategory( {name: this.state.name , sub:null})
        .then( (r) =>{
          console.log(r);
        });
    }

    

  }
  handleImageChange(ev){

    ev.preventDefault;
    let reader = new FileReader();
    let file = ev.target.files[0];
    this.image = file ;

  }
  subcategorieFunction(ev){
    ev.preventDefault;
    if(document.getElementById('hijo').checked){
      document.getElementById("select-padre").removeAttribute('disabled');
    }else{
      document.getElementById("select-padre").setAttribute("disabled", "");

    }
  }
  componentDidMount(){
    fetch('http://localhost:1337/category')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log('data del servicio category ',data)
        this.setState({data: data})
      });
    }
  )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
  render(){
    return(
      <main id="admin-anuncios">
        <Headss/>
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						<div className="back"><Link href="/admin-menu"><a><img src="../static/back.svg"/><span>atrás</span></a></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Agregar Categoria</h1></div>
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
                        <span className="inputs-title">Categoria</span><br/>
                        <div className="inputs-group">
                        <input type="radio" id="padre" name="gender" onClick={ this.subcategorieFunction } />
                        <label for="padre">Padre</label>

                        <input type="radio" id="hijo" name="gender" onClick={ this.subcategorieFunction }/>
                        <label for="hijo">Hijo</label>
                        <select id="select-padre"disabled name="select" required  onChange={ (res) => { this.setState( { subcategoria: res.target.value} ) }}>
                          <option selected hidden>Seleccionar categoría padre</option>
                          {this.state.data.map((categoria)=>
                            <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
                          )}
                        </select>

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
