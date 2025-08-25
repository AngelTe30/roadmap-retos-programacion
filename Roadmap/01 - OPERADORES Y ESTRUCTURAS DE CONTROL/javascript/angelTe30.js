let a = 5;
let b = 30;

//operadores aritméticos
console.log(a+b) //Suma de a y b
console.log(a-b) //resta de a y b
console.log(a*b) //Multiplicación de a y b
console.log(a/b) //División de a y b
console.log(a%b) //Residuo de a entre b
console.log(a**b) //Exponente de "a" elevado a "b"


//operadores de asignación
console.log(b += a) //b = b + a
console.log(b -= a) //b = b - a
console.log(b *= a) //b = b * a
console.log(b /= a) //b = b / a
console.log(b %= a) //b = b % a
console.log(b **= a) //b = b**a

//operadores de asignacion binario
console.log(a <<= b) //desplazamiento a la izquierda
console.log(b >>= a) //desokazamiento a la derecha 
console.log(b >>>= a) //desplamaiento a la dereacha sin signo


//operadores de comparación
//igualdad
console.log(a == b) //igualdad de valores, resultado false
console.log(a == '5') //igualdad de valores, resultado true
console.log(a === b) //estrictamente igual, resultado false, exige que los los tipos y contenido sea igual
console.log(a != b) //desigualdad de valores, resultado true
console.log(a !== b) //Estrictamente desigual, resultado true, devuelve true cuando lo operadores son del mismo tipo pero desiguales
console.log(a > b) //En este caso compara, si, a es mayor que b, el resultado es false
console.log(a < b) //En este caso compara, si, a es menor que b, el resultado es true
console.log(a >= b) //Compara si a es mayor o igual que b, resultado false
console.log(a <= b) //Compara si a es menor o igual que b, resultado true

//operadores lógicos
console.log(a >0 && b > 0) //Es verdadero cuando ambas comparaciones son verdaderas, si a es mayor a 0 y b es mayor a 0
console.log(a > 0 || b > 0) //Es verdadero cuando al menos una de las comparaciones es verdadero
console.log(!(a > 0)) //Es verdadero cuando la comparacion es falsa 


//operadores de pertenencia
const persona = { nombre: 'Angel', edad: 30}

console.log('nombre' in persona) //Esto devuelve true porque la propiedad nombre se encuentra en el objeto
console.log('apellido' in persona) //Esto devuelve false porque la propiedad apellido no se encuentra dentro del objeto

const coche = {
    marca: 'Audi',
    modelo: 'A4',
    motor: {
        potencia: 150,
    }
}

console.log('modelo' in coche) //false, porque el operador in solo busca en la cadena de prototipos del objeto sin incluir los objetos anidados
console.log(coche.hasOwnProperty('potencia')) //false, es false porque al igual 
console.log(coche instanceof Object) //true



//condicionales
//sentencia if 

a= 15;
b=2

if(a<b){
    console.log('El valor de a es menor que el valor de b')
} //Este condional se ejecuta cuando se cumple condicion de que a es menor que b

if(a>b){
    console.log('El valor de a es mayor que el valor de b')
}else{
    console.log('El valor de a es menor que el valor de b')
} //En este caso, se ejecutara una de las dos sentencias, si a es mayor que b, se ejecuta el primer bloque, en caso de no cumplir la condicion, se ejecuta el segundo bloque

if (a > b){
    console.log('El valor de a es mayor que el valor de b')
}else if(a < b){
    console.log('El valor de a es menor que el valor de b')
}else{
    console.log('Los valores son iguales')
} //En caso se ejecutara tres bloques, dependiendo de las sentencias, si es mayor a que b, o si es menor a que b, y en caso de que no sea ninguan de las anteriores, se ejecutara el ultimo bloque.

//sentencia switch

let dia = new Date().getDay() //esta variable obtendra el dia de la semana actual

switch(dia){
    case 0:
        console.log('Domingo')
        break;
    case 1: 
        console.log('Lunes')
        break;
    case 2: 
        console.log('Martes')
        break;
    case 3:
        console.log('Miercoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sabado')
        break;
} //Esta sentencia ejecutara un bloque de codigo dependiendo del dia de la semana.

//Loop for
let x= 0

for (let i; i<=15;i++){
    x += i;
    console.log(x)
} /*Este bucle for se ejecutara el codigo hasta que i sea menor o igual que 15
Tambien puede ser con decrementos, es decir*/

let y = 5
for (let  i = 16; i >= 0; i--){
    y -= i;
    console.log(y)
}
/*En este bucle for se ejecutara hasta que y sea menor o igual a 0
y cada iteracion restara una unidad a i, asi hasta que cumpla la condicion*/

//loop while 

while( i < 10){
    console.log(i);
    i++;
}/*El bucle se repetira hasta que i
sea menor de 10, en cada iteracion al finalizar
se sumara una unidad al valor de 1*/ 

//loop do while
do {
    console.log(i);
    i++;
}
while(i<15)
/* En esta iteracion primero se ejecuta el codigo
y despues se compara los parametros.
Es decir, primero sumara 1 a i, despues compara si i aun es menor que 
15, en caso de ser verdadero, ejecutara de nuevo la accion*/

//Loop for in
/* */ 
const person = {
    name: 'Angel',
    age: 30,
    city: 'Mexico City'
}

for (let key in person){
    console.log(key)//Muestra las propiedades dentro del objeto
    console.log(person[key])//Muestra  los valores detro de cada propiedad
    console.log(x + ': '+ person[key])//Es una fomra de imprimir la propiedad y su valores respectivos
}

//Loop for of
const numbers = [1,5,3,18,7]

let z = 1;
for(const x of numbers){
  let y = z + x
  console.log(y)
}

//este bucle for of itera cada valor del array y hace la respectiva suma para despues imprimirlo en consola

 for(i=10;i<=55;i++){
   if(i!==16 && i%2 == 0 && i%3 !==0){
      console.log(i)
   }
 }
     
