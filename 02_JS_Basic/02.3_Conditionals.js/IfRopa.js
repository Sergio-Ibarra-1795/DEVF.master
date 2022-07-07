
var Genero = prompt('¿Eres de sexo femenino?'); 


if(Genero ==='si') {
    var esDeNoche = prompt('¿Tu evento es por la noche?');
    var esCasual = prompt('¿Tu evento es casual?');
    var Mood = prompt('¿Te sientes mas en mood color oscuro o fresco?');


     if(Genero ==='si' && esDeNoche=='si' && esCasual=='no' && Mood=='oscuro') {
        console.log('Te sugiero:');
        document.write('Te sugiero:');
        document.write("<img src='https://as2.ftcdn.net/v2/jpg/01/96/02/63/1000_F_196026323_6fHaSUe4gV3ssaZW8ZEV8myiqRPqcuaZ.jpg' height=200 widht=100>");}
     else if(Genero ==='si' && esDeNoche=='no' && esCasual=='no' && Mood=='oscuro') {
        console.log('Te sugiero:');
        document.write('Te sugiero:');
        document.write("<img src='https://i.pinimg.com/originals/77/92/d0/7792d0f4b4103e1cf18d9b283131ac7a.jpg' height=200 widht=100>");}
     else if(Genero ==='si' && esDeNoche=='no' && esCasual=='si' && Mood=='oscuro') {
        console.log('Te sugiero:');
        document.write('Te sugiero:');
        document.write("<img src='https://i.pinimg.com/564x/be/ac/7d/beac7d605ede23bbbfb300fa7ee3b1cb.jpg' height=200 widht=100>");}
    
     if(Genero ==='si' && esDeNoche=='si' && esCasual=='no' && Mood=='fresco') {
            console.log('Te sugiero:');
            document.write('Te sugiero:');
            document.write("<img src='https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2021/04/72411_0047-scaled.jpg' height=200 widht=100>");}
    

}

    
    


// } else if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si') {
//     var esEmbarazada = prompt('¿Estas embarazada?'); }

//           if (esEmbarazada=='no') {
//              console.log('No eres apta para la vacuna');
//              document.write('No eres apta para la vacuna');}

//          else if (esEmbarazada=='si'){
//             var semanasGestacion = number(prompt('¿Cuantas semanas de gestación tienes?'));}
//                 if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si' && esEmbarazada==='si' && semanasGestacion<9) {
//                     console.log('NO eres apta para la vacuna')
//                     document.write('NO eres apta para la vacuna')}
        
//  if (edad>=18 && esFronterizo =='si' && cumple30años=='si' && Genero=='si' && esEmbarazada==='si' && semanasGestacion>=9) {
//              console.log('Eres apta para la vacuna')
//              document.write('Eres apta para la vacuna')
//  }