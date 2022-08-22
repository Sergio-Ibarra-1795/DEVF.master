//Implementación de colas 

class Queue {
    constructor(){
        this.items = [] 
    }

    enqueue(item){ 
        this.items.push(item);
    }

    dequeue(){ 
       return this.items.shift(); 
    }

    peak(){ //En este caso sabemos que primer elemento siempre es cero
        return this.item(this.items[0]);
     }

    size(){ 
        return this.items.length; 
     }
    
    print(){ 
        console.log(this.items) 
     }

}