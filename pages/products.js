import React, { Component } from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts'
import ProductFeed from '../components/category-products/productFeed'
import Social from "../components/home/social"
import Footer from "../components/home/footer"

// function Products() {
// 	return (
// 		<main className="products">
// 			<Headss />
// 			<HeaderProducts />
//       <ProductFeed />
// 			<Social />
// 			<Footer />
// 		</main>
// 	);
// }

class Products extends Component{
	state = {
		categoryFeed : ''
	}
	handleChangeCategory( categoryId){
		this.setState({ categoryFeed: categoryId });
	}
	render(){
		return (
			<main className="products">
				<Headss />
				<HeaderProducts handleCategory= { this.handleChangeCategory.bind(this) }/>
	      <ProductFeed categoryFeed={ this.state.categoryFeed }/>
				<Social />
				<Footer />
			</main>
		);
	}
}

export default Products;
