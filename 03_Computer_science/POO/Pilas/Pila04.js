/*4.-  Un almacén tiene capacidad para apilar “n” contenedores.
 Cada contenedor tiene una posición. Cuando se desea retirar
  un contenedor específico, deben retirarse primero los 
  contenedores que están encima de él y colocarlos en otra
   pila,efectuar el retiro y regresarlos a su respectivo lugar.*/

//Para implementar una pila en JS
class Stack {
    constructor(){
        this.item = [] 
    }

    push(item){ 
        this.item.push(item);
    }

    pop(){ 
       return this.item.pop(); 
    }

    peak(){ 
        return this.item(this.item.length-1);
     }

    size(){ 
        return this.item.length; 
     }
    
    print(){ 
        console.log(this.item) 
     }


}

   let stack04 = new Stack(); 

   stack04.push(3)
   stack04.push(2)
   stack04.push(3)
   stack04.push(4)
   stack04.push(6) // <- Este elemento está en la posición 4
   stack04.push(8)
   stack04.push(1)
   stack04.push(2)
   stack04.push(5)
   stack04.push(5)
   
   stack04.print()
   

   function retirar_contenedor_pos(stack,pos) {
    let aux = new Stack() //Creando el stack auxiliar (almacen auxiliar)
    while(stack.size()>pos){
        aux.push(stack.pop());
    } 
    return aux;
     // ...
   } 
   

let aux_volteado = retirar_contenedor_pos(stack04,7);
console.log(aux_volteado);
console.log(aux_volteado.size());

function voltear_aux (stack) {
    let aux_corregido = new Stack()
    for(i=0;i<=aux_volteado.size()+3;i++){
        aux_corregido.push(stack.pop())
    }

    return aux_corregido
}


console.log(stack04);

let aux_corregido = voltear_aux(aux_volteado);
console.log(aux_corregido);
