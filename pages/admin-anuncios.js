import Headss from 'components/head'

export default () => (
    <main id="admin-anuncios">
      <Headss/>
      <div className="container">
				<div className="row">
					<div className="col-md-3 back-page">
						<div className="back"><a href="#"><img src="../static/back.svg"/><span>atrás</span></a></div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-4 menu-admin">
								<h1 className="title-admin-menu">Anuncios</h1>
					       <div className="new-item-anuncio">
                   <span className="number-anuncio">1</span>
                   <h2>Imagen anuncio</h2>
                   <button>Seleccionar archivo</button>
                   <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                 </div>
                 <div className="new-item-anuncio">
                   <span className="number-anuncio">2</span>
                   <h2>Imagen anuncio</h2>
                   <button>Seleccionar archivo</button>
                   <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                 </div>
                 <div className="new-item-anuncio">
                   <span className="number-anuncio">3</span>
                   <h2>Imagen anuncio</h2>
                   <button>Seleccionar archivo</button>
                   <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                 </div>
                 <button className="save">Guardar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
    </main>


)
