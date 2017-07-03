import Headss from 'components/head'

export default () => (
    <main id="admin-user">
      <Headss/>
      <div className="container">
				<div className="row">
					<div className="col-md-3 back-page">
						<div className="back"><a href="#"><img src="../static/back.svg"/><span>atrás</span></a></div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-10 menu-admin">
								<h1 className="title-admin-menu">Usuarios</h1>
                <div className="add-user"><span className="add-user-icon">Agregar usuario</span><img src="../static/add.svg"/></div>
								<nav className="nav-admin">
									<ul>
                    <li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 1</a></li>
										<li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 2</a></li>
										<li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 3</a></li>
										<li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 4</a></li>
										<li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 5</a></li>
										<li><div className="delete-icon"><img src="../static/x-icon.svg"/></div><a href="#">usuario 6</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
    </main>


)
