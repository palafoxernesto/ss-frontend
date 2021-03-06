/*this is the component of the header*/

import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import axios from 'axios'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Header extends Component{



  constructor(props){
    super(props);
    this.state = {data: []};
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
      <div className="container-fluid mobile-feed-page">
        <div className="row header">
          <div className="col-md-2 flex  syslogo"><img style={imgLogoStyle} src="/static/syslogowhite.png"/></div>
          <div className="col-md-10">
            <div className="row">
            <div className="col-md-12 col-xs-12 text-md-right agnesi"><img style={agnesiStyle} src="/static/agnesiwhiteh.png"/></div>
            <div className="col-md-12 col-xs-12">
              <ul className="ListMenu">
                {this.state.data.map((categoria)=>
                  <li  key={categoria.id}>
                   <Link  href={{ pathname: 'products', query: { id: `${categoria.id}`} }} >
                      <a>
                        {categoria.name}
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
