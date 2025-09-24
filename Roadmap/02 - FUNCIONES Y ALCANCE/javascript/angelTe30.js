let x = 65
let y = 30


function sumar(a,b){
    return a+b
}

console.log(sumar(15,30))

function  restar(){
    return x-y
}

console.log(restar())

function multiplicar(a,b){
    return a*b
}

console.log(multiplicar(12,13))

function dividir(){
    return x/y
}

console.log(dividir())

function elevarCuadrado(){
    return x**2
}

console.log(elevarCuadrado())

function elevarCubo(){
    let n = 3
    let x=65
    x**n 
}

//Extra



function ejecicioExtra(a,b){
    for(let i=1; i<=100; i++){
        if(i%3 === 0){
            console.log(a)
        }
        if(i%5 === 0){
            console.log(b)
        }
        if(i%3 === 0 && i%5 === 0){
            console.log(a+b)
        }
    }
}