

// Acumuladores con ciclo for 
var texto, nombre;

//Nombre is the acumulator 

for (var i = 1; i<=4; i++){ //i<=4, Asume dos nombres y dos apellidos
    texto = prompt('Ingresa tu nombre');
   
    if (i===1){
        nombre = texto; //Con esto se logra que la variable nombre guarde el primer texto en el indice 1 de los 4  
    } else
    nombre += ' '+ texto;
    // nombre += texto; otra manera de incrementar o acumular

}

document.write(nombre)