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
            //this.head = node (Código no válido para insertar más nodos)

        if(this.head == null){
            this.head = node
        }else {
            //this.head.next = node (codigo no necesario para el for de más de 2 nodos)
            let current = this.head
            while(current.next!=null){
                //if(current.next==null){
                  //  break
                  current = current.next
                }
                current.next = node 
            }
            

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

ll.insert(2);

ll.insert(3);

ll.insert(4);

console.log(ll);

