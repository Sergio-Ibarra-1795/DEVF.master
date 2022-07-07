var edad = number(prompt('¿Qué edad tienes?')); 
var esFronterizo = prompt('¿Vives en un municipio de la frontera?'); 
var cumple30años = prompt('¿Cumples 30 años este año?'); 
var Genero = prompt('¿Eres de sexo femenino?'); 
var esEmbarazada;
var semanasGestacion;


if(edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='no') {
    console.log('Eres apto para la vacuna');
    document.write('Eres apto para la vacuna');

} else if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si') {
    var esEmbarazada = prompt('¿Estas embarazada?'); }

          if (esEmbarazada=='no') {
             console.log('No eres apta para la vacuna');
             document.write('No eres apta para la vacuna');}

         else if (esEmbarazada=='si'){
            var semanasGestacion = number(prompt('¿Cuantas semanas de gestación tienes?'));}
                if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si' && esEmbarazada==='si' && semanasGestacion<9) {
                    console.log('NO eres apta para la vacuna')
                    document.write('NO eres apta para la vacuna')}
        
 if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si' && esEmbarazada==='si' && semanasGestacion>=9) {
             console.log('Eres apta para la vacuna')
             document.write('Eres apta para la vacuna')
 }
