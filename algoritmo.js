const cant = document.querySelector("#cantidad");
const agregarProducto = document.querySelector("#Agregar");
const pTotalPesos= document.querySelector("#Total");
const selectCant = document.querySelector("select");
const olCarrito = document.querySelector("#producto-carrito");
const fsContenedor1 = document.querySelector("#contenedor1");

const VALOR_PRODUCTO= 10000;
const NOMBRE_PRODUCTO= "Disco";
const VALOR_PRODUCTO2 = 3000;
const NOMBRE_PRODUCTO2 = "CD'S";

let precioProductoActual = VALOR_PRODUCTO;
let nombreProductoActual = NOMBRE_PRODUCTO; 
 



let precioTotal = 0;


function agregarCant(){
precioTotal = (precioProductoActual*selectCant.value)+ precioTotal;
pTotalPesos.innerHTML="TOTAL: $" + (precioTotal);
olCarrito.innerHTML += `<li>${nombreProductoActual} (${selectCant.value} )</li>`;



 }


 function siguienteProducto(){

 fsContenedor1.innerHTML = `
    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2J4ETOZ4mrv70YTjoHxaFXUJpUK1XTfLeQ&usqp=CAU";
    <p>CD'S</p>
    <p>Precio $ 3000 </p>
    
    
    
    
    `; 
 
   precioProductoActual = VALOR_PRODUCTO2;
   nombreProductoActual = NOMBRE_PRODUCTO2; 









 }

