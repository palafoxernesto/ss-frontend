// import axios from 'axios';

const URL = `http://localhost:1337`;

var cabecezaras = new Headers();

const createProduct = (data) => {
  // data['category_name'] = "Perros";
  console.log(data);
  return fetch(`${URL}/post`,{
    method: "POST",
    headers: cabecezaras,
    body: JSON.stringify(data)
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
