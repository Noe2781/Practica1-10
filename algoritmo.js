const cant = document.querySelector("#cantidad");
const agregarProducto = document.querySelector("#Agregar");
const pTotalPesos= document.querySelector("#Total");

const VALOR_PRODUCTO= 500;


let cantidad1="def value";


function agregarCant(){
cantidad1=VALOR_PRODUCTO*cant.value
console.log (cantidad1)
pTotalPesos.innerHTML="TOTAL: $" + VALOR_PRODUCTO*cant.value;

 }

