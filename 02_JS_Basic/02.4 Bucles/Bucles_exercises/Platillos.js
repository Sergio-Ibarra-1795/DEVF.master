/* 1. Crear un arreglo de 6 platillos
1.2. Mediante un ciclo for, mostrar todos los platillos
1.3. Mediante un for o  if, mostrar solo la valor 3 y 5 
1.4. Mediante un for o if, mostrar los elementos impares
1.5. Mediante un for o if, mostrar los elementos pares*/

let number_platillos = 6; //Se define que el array platillos tendrá 6 elementos
let array_platillos = []; //Se declara vacío el array platillos que despues se llenará con las entradas del usuario 
let platillo;
alert('Escribe tus 6 platillos favoritos'); //Para iniciar el programa de cara al usuario 

for(i=0;i<number_platillos;i++){ //Se define que desde i=0 (porque los indices en los arrays comienzan en cero) hasta el número de platillos

    platillo = prompt(`Ingresa tu platillo a elegir`); //En cada iteración pedirá al usuario un platillo
    array_platillos.push(platillo); //En cada iteración agregará el platillo al final del array_platillos   
}

document.write(`${array_platillos} <br>`); //Imprime de manera "normal" el array_platillos 
document.write('<br>');


//1.2. Mediante un ciclo for, mostrar todos los platillos
document.write(`Los 6 platillos que elegiste son: <br>`); 
for (j=0;j<array_platillos.length;j++){ //Imprime de manera separada cada platillo del array_platillos
    document.write(`${j+1}. ${array_platillos[j]} <br>`)
}
document.write('<br>');


//1.3. Mediante un for o  if, mostrar solo la valor 3 y 5 
document.write(`Tus platillos 3 y 5 son: <br>`); 
for (k=0;k<array_platillos.length;k++){ 
    if (k==2 || k==4){
        document.write(`${k+1}. ${array_platillos[k]} <br>`)
    }  
}
document.write('<br>');

//1.4. Mediante un for o if, mostrar los elementos impares
document.write(`Tus platillos impares son: <br>`); 
for (l=0;l<array_platillos.length;l++){ 
    if (l %2 ===1){
        document.write(`${l+1}. ${array_platillos[l]} <br>`)
    }  
}
document.write('<br>');


//1.4. Mediante un for o if, mostrar los elementos pares
document.write(`Tus platillos pares son: <br>`); 
for (m=0;m<array_platillos.length;m++){ 
    if (m %2 ===0){
        document.write(`${m+1}. ${array_platillos[m]} <br>`)
    }  
}


