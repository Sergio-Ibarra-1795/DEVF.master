console.log("API de la NASA")
import fetch from "node-fetch"

const llave = "qnYqEcs6ZysAb4h3SmFaupoPc92V6UfxS5DgRqLC"
const APInasa = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${llave}`

async function apiNasa(url){
    const consulta = await fetch(url)
    let respuestaJson = await consulta.json()
    console.log(respuestaJson.near_earth_objects)
    let meteoritos =  respuestaJson.near_earth_objects 
    Object.keys(meteoritos).forEach((elemento,indice,arreglo)=>{
        let lista_fechas = meteoritos[elemento]
        lista_fechas.forEach((el,ind,arr)=>{
            if (el.is_potentially_hazardous_asteroid ==true){
                console.log(`El meteorito:${el.name} es potencialmente peligroso`)
            } else {
                console.log(`El meteorito:${el.name} NO es potencialmente peligroso`)
            }
        })
    })
}

apiNasa(APInasa)
