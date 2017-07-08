import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { getProductsByCategory } from '../../pages/api-admin'

const URL = `http://localhost:1337`;

export default class ProductFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      categoryId: ''
    };
  }
  componentWillMount(){
    // console.log(this.state.categoryId);
  //   fetch('http://localhost:1337/posts')
  //   .then((response) => {
  //     if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //       response.status);
  //       return;
  //     }
  //
  //     // Examine the text in the response
  //     response.json().then((data) => {
  //       console.log(data)
  //       this.setState({data: data})
  //     });
  //   }
  // )
  // .catch((err) => {
  //   console.log('Fetch Error :-S', err);
  // });
  }


  static async getInitialProps ({ query}) {
    const identificador = query.id;

      console.log(identificador);
      return { identificador }
  }

  render(){
      return(
        <div className="container">
        <div className="row product">
        <div className="col-md-6 col-xs-6 feed-box">
        <div><img src="static/mesa1.png"/></div>
        <div className="feed-description"><span>Mesa N°1</span><hr/></div>
        <div className="feed-single-redirection"><a href="#">Ver</a></div>
        </div>
        <div className="col-md-6 col-xs-6 feed-box">
        <div><img src="static/mesa2.png"/></div>
        <div className="feed-description"><span>Mesa N°2</span><hr/></div>
        <div className="feed-single-redirection"><a href="#">Ver</a></div>
        </div>
        <div className="col-md-6 col-xs-6 feed-box">
        <div><img src="static/mesa3.png"/></div>
        <div className="feed-description"><span>Mesa N°3</span><hr/></div>
        <div className="feed-single-redirection"><a href="#">Ver</a></div>
        </div>
        <div className="col-md-6 col-xs-6 feed-box">
        <div><img src="static/mesa4.png"/></div>
        <div className="feed-description"><span>Mesa N°4</span><hr/></div>
        <div className="feed-single-redirection"><a href="#">Ver</a></div>
        </div>
        </div>
        </div>
  )
}
}
