// import axios from 'axios';

const URL = `http://localhost:1337`;

var cabecezaras = new Headers();

  // CREAR PRODUCTO
const createProduct = (data, url) => {

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

  // LISTA DE PRODUCTOS POR CATEGORIA
const getProductsByCategory = (id) => {

    return fetch(`${URL}/posts/category/${id}`, {
      method: "POST",
      headers: cabecezaras,
      body: null
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      console.log(err);
    })
}

  // CREAR CATEGORIA
const createCategory = (data, image) => {

  let formData = new FormData();

      formData.append('name', data.name);
      formData.append('image', image);

  return fetch(`${URL}/category`, {
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    // console.log(r);
    return r.json();
  })
  .catch( (err) => {
    console.log(err);
  })
}

// LOGIN
const login = (data) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: cabecezaras,
    body: JSON.stringify(data)
  })
  .then( (r) => {
    console.log(r);
  })
  .catch( (err) =>{
    console.log(err);
  })
}

// LOGIN
const signUp = (data) => {
  return fetch(`${URL}/signup`,{
    method: "POST",
    headers: cabecezaras,
    body: JSON.stringify(data)
  })
  .then( (r) => {
    console.log(r);
  })
  .catch( (err) =>{
    console.log(err);
  })
}

export {
  createProduct,
  createCategory,
  getProductsByCategory,
  login,
  signUp
}
