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
										<li>Usuarios</li>
										<li>Categorias</li>
										<li>Muebles</li>
										<li>Sliders</li>
										<li>Anuncios</li>
										<li>Agnesi casa</li>
									</ul>
		          </div>
		        </div>
		      </div>
				</div>
			);
	}
}

export default AdminLogin;
