
var Genero = prompt('¿Cuál genero de ropa quieres usar? m/f'); 


if(Genero ==='f') {
 var esDeNoche = prompt('¿Tu evento es por la noche o por el dia? noche/dia');
 var esCasual = prompt('¿Tu evento es casual o formal? casual/formal');
 var Mood = prompt('¿Te sientes mas en mood color oscuro o fresco? oscuro/fresco');
 var FNocheForOs = "https://as2.ftcdn.net/v2/jpg/01/96/02/63/1000_F_196026323_6fHaSUe4gV3ssaZW8ZEV8myiqRPqcuaZ.jpg" , height=200, widht=100;
 var FNocheForFre = "https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2021/04/72411_0047-scaled.jpg";
 var FNocheCasOs = "https://i.pinimg.com/236x/62/ec/cd/62eccd8b7d21a412779d090c4d0f7b03.jpg";
 var FNocheCasFre = "https://i.pinimg.com/originals/c8/d5/88/c8d5889c04dca01af75f460060ad99c9.jpg";
 var FDiaForOs = "https://ae01.alicdn.com/kf/HTB1tDc2KpXXXXcqXVXXq6xXFXXX6/Free-shipping-Dress-office-ladies-wear-business-wear-elegant-formal.jpg" , height=200, widht=100;
 var FDiaForFre = "https://i.ebayimg.com/images/g/lDgAAOSwY35fGaFu/s-l500.jpg" , height=200, widht=100;
 var FDiaCasOs = "https://i.pinimg.com/originals/fb/29/21/fb2921e5d7cd598f344d6d570758f7aa.jpg" , height=200, widht=100;
 var FDiaCasFre = "https://i.pinimg.com/originals/3f/b5/4b/3fb54b2437edac42e17a141ce9dbd240.jpg" , height=200, widht=100;

     if(esDeNoche==='noche' && esCasual==='formal' && Mood=='oscuro') {
        console.log('Te sugiero:');
        document.write('Te sugiero:');
        document.write(`<img src="${FNocheForOs}">`);}

      else if(esDeNoche=='noche' && esCasual=='formal' && Mood=='fresco') {
           console.log('Te sugiero:');
           document.write('Te sugiero:');
           document.write (`<img src="${FNocheForFre}">`);}
     
      else if(esDeNoche=='noche' && esCasual=='casual' && Mood=='oscuro') {
           console.log('Te sugiero:');
           document.write('Te sugiero:');
           document.write (`<img src="${FNocheCasOs}">`);}

      else if(esDeNoche=='noche' && esCasual=='casual' && Mood=='fresco') {
            console.log('Te sugiero:');
            document.write('Te sugiero:');
            document.write(`<img src="${FNocheCasFre}">`)}
     
     if(esDeNoche=='dia' && esCasual=='formal' && Mood=='oscuro') {
        console.log('Te sugiero:');
        document.write('Te sugiero:');
        document.write(`<img src="${FDiaForOs}">`);}

      else if(esDeNoche=='dia' && esCasual=='formal' && Mood=='fresco') {
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write(`<img src="${FDiaForFre}">`)}

      else if(esDeNoche=='dia' && esCasual=='casual' && Mood=='oscuro') {
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write (`<img src="${FDiaCasOs}">`);}
    
      else if(esDeNoche=='dia' && esCasual=='casual' && Mood=='fresco') {
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write(`<img src="${FDiaCasFre}">`)}

}


if(Genero ==='m') {

   var Mood = prompt('¿Prefieres un color oscuro o fresco? oscuro/fresco');
   var esCasual = prompt('¿Es un evento casual o formal? casual/formal');
   var Corbata;

   
   var MForOsCor = "https://i.pinimg.com/originals/6a/c4/47/6ac447836372e07da1c72389d4842360.jpg" , height=200, widht=100;
   var MForFreCor = "https://www.stylesofman.com/wp-content/uploads/2020/04/f1cc88ec1111f4b000f956fa1bb217ee.jpg", height=200, widht=100;
   var MForOsNoCor = "https://nextluxury.com/wp-content/uploads/Mens-Formal-Wear/Pants/Pants%20Mens%20Formal%20Wear%202%20-hamza.taqvim.jpg", height=200, widht=100;
   var MForFreNoCor = "https://cdn.shopify.com/s/files/1/0347/3225/files/Dress3_large.jpg?v=1535898895", height=200, widht=100;
   var MCasOsLar = "https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/styleguide/resources/images/about/styleTips/Q7/life_highland.jpg", height=200, widht=100;
   var MCasFreLar = "https://i.pinimg.com/736x/a2/38/d7/a238d708a3c357f8a18db267b4a86275.jpg" ,height=200, widht=100;
   var MCasOsCor = "https://i.pinimg.com/236x/67/ba/55/67ba559bebef397bf87a7e0ea87e90f4.jpg" , height=200, widht=100;
   var MCasFreCor = "https://cdn.shopify.com/s/files/1/0162/2116/files/5_Daily_wear_outfits_for_men_6.jpg?v=1543990577" , height=200, widht=100;
  
  
      if(esCasual==='formal') {
         var Corbata = prompt('¿Es necesario el uso de corbata?si/no');

          if (esCasual==='formal'&& Corbata==='si' && Mood==='oscuro'){
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write (`<img src="${MForOsCor}">`);}

          else if (esCasual==='formal'&& Corbata==='si' && Mood==='fresco'){
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write (`<img src="${MForFreCor}">`);}


          else if (esCasual==='formal'&& Corbata==='no' && Mood==='oscuro'){
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write (`<img src="${MForOsNoCor}">`);}

          else if (esCasual==='formal'&& Corbata==='no' && Mood==='fresco'){
             console.log('Te sugiero:');
             document.write('Te sugiero:');
             document.write (`<img src="${MForFreNoCor}">`);}
       
          }

   
      if(esCasual==='casual') {
            var Camisa = prompt('¿Prefieres usar camisa manga larga o corta? larga/corta');
   
             if (esCasual==='casual'&& Camisa==='larga' && Mood==='oscuro'){
                console.log('Te sugiero:');
                document.write('Te sugiero:');
                document.write (`<img src="${MCasOsLar}">`);}
   
             else if (esCasual==='casual'&& Camisa==='larga' && Mood==='fresco'){
                console.log('Te sugiero:');
                document.write('Te sugiero:');
                document.write (`<img src="${MCasFreLar}">`);}
   
   
             else if (esCasual==='casual'&& Camisa==='corta' && Mood==='oscuro'){
                console.log('Te sugiero:');
                document.write('Te sugiero:');
                document.write (`<img src="${MCasOsCor}">`);}
   
             else if (esCasual==='casual'&& Camisa==='corta' && Mood==='fresco'){
                console.log('Te sugiero:');
                document.write('Te sugiero:');
                document.write (`<img src="${MCasFreCor}">`);}
          
             }
         
      
  
  }
    
    