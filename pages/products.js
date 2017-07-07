import React, { Component } from 'react'
import Link from 'next/link'
import Headss from 'components/head'
import fetch from 'isomorphic-fetch'
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts'
import ProductFeed from '../components/category-products/productFeed'
import Social from "../components/home/social"
import Footer from "../components/home/footer"

const Products =  (props) => (
	<main className="products">
		<Headss />
		<HeaderProducts/>
		<ProductFeed />
		<Social />
		<Footer />
	</main>
)


export default Products;
