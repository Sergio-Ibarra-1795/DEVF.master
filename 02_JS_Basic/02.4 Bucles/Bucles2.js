/* Write a JS code to print Even numbers in given array
Function `printEven()` prints all the even numbers 
of a 2D array using for loops and ‘%’ operator.*/

//First we defined the array from which we will extract even numbers
var arr = [13,23,12,45,22,48,66,100];

function printEven(arr) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]%2==0){
        console.log(arr[i]); //print even number
        document.write(arr[i]);
      }  
    }
  }

  printEven(arr)
  

var arr2 = [14,23,12,45,22,48,66,101];

function printOdd(arr2) {
    for (var i=0;i<arr2.length;i++){
      if(arr2[i]%2==1){
        console.log(arr2[i]); //print odd number
        document.write(arr2[i]);
      }  
    }
  }
printOdd(arr2)



/* Write a JS code to find the power of a number using for 
loop Function numPower() to returns power of number 
for provided exponential value using for loop.*/

function numPower(num,power){
    var res =1; //return 1 for power=0 
    for (var i=0;i<power;i++){ //Inicia el contador y lo sube hasta que ese contador sea uno menor que el power (no puede ser <=) 
            res = res*num; //Va multiplicando el número por si mismo (concepto de potencia)       
    } 

    return res; 

}
console.log(numPower(4,0))



/*Write a JS code to find the number of digits in a number
Function digitCount() to returns the number of digits 
in a given number using while loop.*/

// console.log(Math.floor(.83)) equals 0 because Math.floor(x)Returns the largest integer less than or equal to x.

function digitCount(num) {
    var count=0; //
    while(num!=0){
      num=Math.floor(num/10); //Va dividiendo el número entre 10 para hacer del último número un punto decimal y contarlo, al mismo tiempo que lo lleva a un valor <1 
      count++; //va contando el número de veces que divid entre 10 y por lo tanto el número de digitos
    }
    return count;
  }
  console.log(digitCount(1254145145))




/*Write a JS code to calculate the sum of digits in a number
Function digitSum() to returns sum of all digits in a given ¨
number using while loop */

//PREVIOUS EXPLANATION
//num = 4367;
//sum = num % 10; //Está tomando el reciduo de dividir el número entre 10, que es como tomar el número de hasta la derecha 
//num = Math.floor(num/10);//Está dividiendo entre 10 y redondeando hacia abajo el número para "deshacernos" del último número 
//console.log(sum);
//console.log(num);

function digitSum(num) {
    var sum=0;
    while(num!=0){
     sum += num % 10; //va agregando el último digito a los digitos a sumar 
     num = Math.floor(num/10); //quita el últomo digito al dividir el num/10 y redondearlo habia abajo 
    }
    return sum;
  }
  console.log(digitSum(4367)); //20
  console.log(digitSum(56349265)); //40

  