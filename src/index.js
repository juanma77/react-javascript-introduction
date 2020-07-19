import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Variables y Constantes; no usar var, debemos usar const para variables cuyo valor no cambie nunca y let para definir variables que tengan un alcance o scope diferente, como por ejemplo en bloques de código

const nombre = 'Juan';
const apellido = 'Lopez';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado );

if( true ) {

  const nombre = 'Peter';

  console.log( nombre ); 

}

// Template strings; usamos los backtips para esta funcionalidad, es como concaterar usando el más "+"

const miNombre = `${ nombre } ${ apellido }`;

console.log( miNombre );

function getSaludo( nombre ) {

  return 'Hola ' + nombre; 


}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`);
