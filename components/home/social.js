import React, { Component } from 'react'
import styled from 'styled-components'

const height = {
  width:'100%',
};
export default class Social extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row social ">
        <div className="col-md-5 col-xs-3" ><hr width="100%"/></div>
        <div className="col-md-2 col-xs-6 icons" >
          <img className="facebook"src="static/icono1-black.svg"/>
          <img className="instagram"src="static/icono2-black.svg"/>
          <img className="correo"src="static/icono3-black.svg"/>
        </div>
        <div className="col-md-5 col-xs-3" ><hr width="100%"  /></div>
      </div>
    </div>
    )
  }
}
