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
        let node = new Node(data);

        if(this.head == null){
            this.head = node
        }else {
            let current = this.head
            while(current.next!==null){
                  current = current.next
                }
                current.next = node 
            }
        }
    delete(data){
        let prev = this.head
        let current = this.head
        
        if(this.head.data==data){ //Si el nodo a lemininar es el head
            this.head = this.head.next

        } else {
            while(current.data !== data){
                prev = current
                current = current.next
            }
            prev.next=current.next //Este se debe sacar del while y el if e incluir aqui
        }
    
}
    search(data){

        let current = this.head

        while(!(current == null || current.data == data)){
            current = current.next
    }
    return current
}

    print(){
    }
}


let ll = new LinkedList();
ll.insert(1);

ll.insert(2);

ll.insert(3);

ll.insert(4);

ll.delete(3);


console.log(ll);


console.log(ll.search(2));
