console.log('Primer código escrito desde la terminal en Node y git-bash')
console.log('Segunda vez que entro a trávez del nano a este archivo y lo edito desde el GIT-BASH')
console.log('Esyo ahora probando lo del npm start nodemon')
console.log('Try 5')
var colors = require ('colors')
function Sumar (x,y){
    let suma = x + y
     console.log("La suma es:".red+suma)
}
Sumar(25,30)

var alumnos = ['Stephani', 'Alumno2', 'Alumno3', 'Alumno4']
for (let i=0; i<alumnos.length; i++){
     console.log(alumnos[i].red)
}

alumnos.forEach((elemento,indice,array) => {
        console.log(elemento.green)
})

var calificaciones = {
     "Stephany":8,
      "Alumno2":9,
      "Alumno 3":10,
       "Alumno 4":9
}

Object.keys(calificaciones).forEach((elemento,indice,arreglo)=> {
     console.log(elemento)
     if (calificaciones[elemento]<9){
          console.log('El estudiante' + elemento.red + `saco ${calificaciones[elemento]}`)
      }
   else {
         console.log('El estudiante sacó'+ elemento.green + `${calificaciones[elemento]} y es muy aplicado`)
   
}
})


