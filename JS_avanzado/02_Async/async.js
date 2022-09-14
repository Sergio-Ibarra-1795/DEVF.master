import fetch from "node-fetch"

console.log('Esta es la clase de asincronicidad')
//codigo sincrono 
console.log('1')
console.log('2')
console.log('3')

//Callback es la forma más sencilla de asincronicidad 

const primeraFunction = () =>{
    console.log('Esta es la primera funcion')
}

const segundaFunction = () =>{
    primeraFunction()
    console.log('Esta es la seguda funcion que manda a llamar a la primera')
}

const terceraFunction = () =>{
    segundaFunction()
    console.log('Esta es la tercera funcion que manda a llamar a la primera')
}

terceraFunction()


function regresarUno() {return 1}
function regresarDos() {return 2}

const sumaDosFunciones = (function1, function2) => {
    const suma = function1() + function2()
    return suma
}

console.log(sumaDosFunciones(regresarUno, regresarDos))



var arreglo = ['Dragon-Ball', 'Nop', 'Bullet', 'Soy tu fan']

//Métodos propios de un array 

var resultadoMap = arreglo.map((elemento,indice,array) => {
    console.log(elemento)
    console.log(indice)
    console.log('arreglo')
    console.log(arreglo)
    if (elemento.length<10){
             return elemento
    } else {
              return 'Nombre de pelicula muy largo'
    }

})

console.log(resultadoMap)

const ejemploMap = (e,i,a) =>{
    console.log(e)
    console.log(i)
    console.log('arreglo')
    console.log(a)
    if (e.length<10){
             return e
    } else {
              return 'Nombre de pelicula muy largo'
    }

}

var resultdoArreglo = arreglo.map(ejemploMap)
console.log(resultdoArreglo)

//Ejemplo de filter 

const sueldos = [
    {
        oficio: 'plomero',
        sueldo: 10000
    },

    {
        programador: 'plomero',
        sueldo: 25000

    },

    {
        contador: 'plomero',
        sueldo: 15000
    },

    {
        becario: 'plomero',
        sueldo: 5000
    },
]

let resultadoFilter = sueldos.filter((elemento,indice,arreglo)=>{
    return elemento.sueldo >=15000
})

console.log(resultadoFilter)


//Set time out como ejemplo de asyncronicidad 

console.log('UNO')
setTimeout(function(){console.log('DOS')},5)
console.log('TRES')


// Consulta a API es un proceso asyncrono (En general a cualquier servidor)


async function ejemploFetch(){
    var respuestaFetch = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    var respuestajson = await respuestaFetch.json()
    
    console.log(respuestajson)
}

ejemploFetch()