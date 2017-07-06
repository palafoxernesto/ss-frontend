import React, { Component } from 'react'
import Link from 'next/link'
import Headss from 'components/head'

class AdminLogin extends Component {
	render() {
			return (
				<div id="admin">
		    <Headss/>
					<div className="container">
		        <div className="row">
		          <div className="col-md-3 logo">
		            <img src="../static/syslogoblack.png"/>
		          </div>
		          <div className="col-md-12 form-admin-login">
		         			<ul>
										<li><Link href="/admin-users"><a>Usuarios</a></Link></li>
										<li><Link href="/admin-category"><a>Categorias</a></Link></li>
										<li><Link href="/admin-products"><a>Muebles</a></Link></li>
										<li><Link href="/admin-sliders"><a>Sliders</a></Link></li>
										<li><Link href="/admin-anuncios"><a>Anuncios</a></Link></li>
										<li><Link href="/agnesi-admin"><a>Agnesi casa</a></Link></li>
									</ul>
		          </div>
		        </div>
		      </div>
				</div>
			);
	}
}

export default AdminLogin;
