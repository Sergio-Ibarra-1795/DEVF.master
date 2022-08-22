//Implementación de un nodo independiente 
class Node {
    constructor(data){
        this.data = data;
        this.next = null;//El atributo this.next está APUNTANDO a null
    }
}


class LinkedList {
    constructor(head = null){
        this.head = head //Had apunta a head, que es null
    }
    
    insert(data){
        let node = new Node(data);//Se está creando el nodo internamente
        this.head = node


    }
    
    delete(){

    }

    print(){

    }

    search(){


    }
}

let ll = new LinkedList();
ll.insert(1);
console.log(ll);
