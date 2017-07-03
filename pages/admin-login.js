import React from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/


function AdminLogin() {
	return (
		<main id="admin">
    <Headss/>
			<div className="container">
        <div className="row">
          <div className="col-md-3 logo">
            <img src="../static/syslogoblack.png"/>
          </div>
          <div className="col-md-12 form-admin-login">
            <div className="form-login">
              <h1>Administrador</h1>
              <form>
                <div>
                  <span>Correo</span><br/>
                  <input type="text"></input>
                </div>
                <div>
                  <span>Contraseña</span><br/>
                  <input type="password"></input>
                </div>
                <button>Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
		</main>
	);
}

export default AdminLogin;
