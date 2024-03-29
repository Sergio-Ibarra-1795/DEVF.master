console.log("Promieses")
import fetch from "node-fetch"
import { resolve } from "path"

//Ejemplo try&catch 

function division (a,b){
    
    try {
        //Este código se va a tratar de ejecutar 
        let resultado = a/b 
        return resultado

    } catch (error){
         //Este código se ejecuta  en caso de que el código del try falle
        console.log("Este es mi error", error)
        console.log(resultado)

    }
}

console.log(division(2,0))

//math.ceil redonde al entero superior 
//math.floor redondea al entero inferiro
//math.random genera un número aleatorio entre 0 y 1
//Si queremos un número entre 0 y N, multiplicamos math.randmon *N

//Generar un número entre x y k math.floor(math.random()*((x-k+1))+x)



const promesaEjemplo = ()=>{
    return new Promise((resolve,reject)=>{
        const numeroAleatorio = Math.floor((Math.random()*(25-15+1))+15)
        setTimeout(()=>{
            numeroAleatorio>=20?resolve(numeroAleatorio):reject(new 
                Error(`El ${numeroAleatorio} es menor que 20`))
        },1000)
    
    })
}


//Forma 1 de ejecutar una promesa .then y .catch 
 promesaEjemplo().then(numero=>{
    console.log(numero)
 }).catch(error=>console.log(error + "Este es el error de mi promesa reject" ))



//Forma 2 de ejecutar una promesa (dentro d un try y un catch)
const funcionAsync = async()=>{
    try{
        const respuesta = await promesaEjemplo()
        console.log(respuesta)
    }
catch(error){
    console.log(error)
} finally{
    console.log("Este código finally se va a ejcutar sin importar si se ejecuta o no la promesa")
}}

funcionAsync()


//Usando la API LIBRARY

const urlAuthor = "http://openlibrary.org/search.json?author=asimov"

async function queryAuthor(urlA){
    let urlLibro = "https://openlibrary.org/api/books?bibkeys=ISBN:"
    const response = await fetch(urlA)
    const responsejson = response.json()
    let arregloids = responsejson.docs[0].isbn
    let arreglolibros = []
    let arregloPromesas = [] //Esto es para ir guardando las promesasd y evitar que truene por el ciclo for de fetchs 
    
    arregloids.forEach(async(element) => {
        let promesa =  fetch(urlLibro+element).then((r)=>r)
       arregloPromesas.push(promesa)
    });

    return new Promise((resolve)=>{
        Promise.all(arregloPromesas).then((proms)=>{
            proms.forEach(async(p)=> {
                    arreglolibros.push(p)
                 })
        }).then(()=>resolve(arreglolibros))
    })
}


async function ejem(url){
    let respuesta = await queryAuthor(url)
    console.log(respuesta)
}

ejem(urlAuthor)
