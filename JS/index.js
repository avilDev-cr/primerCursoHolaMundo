console.log('Hola mundo')

// Tipos de datos
// String 
// Number
// Boolean
// Null
// Undefined
// Object

//Arreglos

//Asignacion de variables
let nombre = 'John'
let edad = 21;
let esMayor = false;
let direccion = null
let telefono = undefined

//reasignacion de variable
edad = 17;

console.log('Nombre: '+ nombre + '\nEdad: '+ edad + '\nDireccion: '+ direccion);

if(edad>18){
    console.log('Puede ingresar, es mayor de de 20 años');
}else{
    console.log('No puede ingresar es menor');
}

const miObjeto = {
    nombre: 'Andres',
    edad: 26,
    aprendiendo: true
}
console.log('\nMi Objecto\n',miObjeto)
console.log(miObjeto.nombre)


//Arreglos
const arregloVacio = []
const arr = [1,2, 'Hola',miObjeto] 
console.log(arr)

arr.push(1998)
arr.push('JS')

console.log(arr)

//Operadores
//Aritmeticos
// + - * / %

//Asignacion
// =

//Comparacion
// ==
// ===
// !=
// !==

//Logicos
// &&
// ||
// !


function saludar(nombre){
    console.log('Hola '+ nombre)
}

saludar('Andres')

//Funciones flecha
const saludar2 = (nombre) => {
    console.log('Hola '+ nombre)
}


