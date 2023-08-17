//Bienvenidos de nuevo a la pizzeria de Nucba!🍕 

//Para esta entrega vamos a estar mezclando el array de pizzas de la anterior entrega con el DOM y el Localstorage.

//El ejercicio que deberán realizar es el siguiente:

//👉 Les dejamos como archivo adjunto la base para realizar el ejercicio, en la cual tendrán el html y css vacíos , una carpeta img y el index.js que tendrá el nuevo array de pizzas, en donde cada pizza tendrá una propiedad imagen además de las propiedades que tenía en el ejercicio anterior.

//👉 Crear un archivo HTML que tenga un input de tipo "number", un botón y un contenedor en el cual renderizar el resultado de la búsqueda que se haga. 

//👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón.

//👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

//🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
//🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
//🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

//El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.

//¿Cuál es el desafío final?

//Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza.


const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


//Primer paso: capturo los elementos del DOM que voy a utilizar
const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const card = document.getElementById("card");


//Obtener el objeto almacenado del localStorage 
//const ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizza"));

//Almacenar en el localStorage - función que guarda
//localStorage.setItem("ultimaPizza", JSON.stringify(pizzas));


//Armo la función
const submitHandler = (e) => {
  e.preventDefault();
  const idValido = pizzas.find(pizza => {
    return pizza.id === parseInt(input.value);
  })
  console.log(idValido);

  if (idValido) {
    //Armo mi card con JS - id valido
    card.innerHTML = `
    <h2>${idValido.nombre}</h2>
    <img src= ${idValido.imagen} id="img"></img>
    <p><strong>Ingredientes:</strong> ${idValido.ingredientes.join(", ")}.</p>
    <h4>$${idValido.precio}.-</h4>`  
    
    localStorage.setItem("ultimaPizza", JSON.stringify(idValido));
    }
  
  else {
    //Armo mi card con JS - id no valido
    card.innerHTML = `
    <p><strong>El número ingresado no es correcto.
    <br>
    <br>
    Por favor, intentalo nuevamente.</strong></p>`

    localStorage.removeItem("ultimaPizza");
  }
};

//Función - Mostrar última pizza buscada
const ultimaPizzaBuscada = () => {
  const ultimaPizza = JSON.parse(localStorage.getItem('ultimaPizza'));
  if (ultimaPizza) {
    card.innerHTML = idValido(ultimaPizza);
  }
};


//Segundo paso: armo la función inicializadora
const init = () => {
  form.addEventListener("submit", submitHandler);

  // Mostrar última pizza al recargar la página
  ultimaPizzaBuscada();

};

//Ejecutar la función init
init();




