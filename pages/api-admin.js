// import axios from 'axios';

const URL = `http://localhost:1337`;

var cabecezaras = new Headers();

const createProduct = (data, url) => {
  // data['category_name'] = "Perros";

  let formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('category_name', data.category_name);
      formData.append('descripcion', data.descripcion);
      formData.append('color', data.color);
      formData.append('user_id', '1');
      formData.append('medidas', data.medidas);
      formData.append('url', url);

  return fetch(`${URL}/post`,{
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    return r.json()
  })
  .catch( (err) => {
    console.log(err);
  })

}

export {
  createProduct
}
