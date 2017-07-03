import React, { Component } from 'react'
import stylesheet from 'styles/main.scss'
import Head from 'next/head'

export default class Headss extends Component {
  render(){
    return(
      <Head>
        <title>This page has a title 🤔</title>
        <meta charset="UTF-8"/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
    )
  }
}
