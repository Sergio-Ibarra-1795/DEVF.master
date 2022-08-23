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
            while(current.next!== null){
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

