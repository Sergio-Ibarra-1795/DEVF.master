class Node {
    constructor(data) {
        this.data = data
        this.next = null // El atributo this.next esta APUNTANDO a null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        // this.length
    }
    
    insert(data) {
        let node = new Node(data)
    
        if(this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next != null) {
                //if(current.next == null) {
                //    break
                //}
                //lo_que_antes_era_current = current
                //current = lo_que_antes_era_current.next
                current = current.next
            }
            // current => Node(3)
            current.next = node
        } 
    }
    
    delete(data) { // delete(2)
        let prev = this.head
        let current = this.head
        
        if(this.head.data == data) {
            this.head = this.head.next
        } else {
            while(current.data !== data) {
                //if(current.data == data) {
                //    prev.next = current.next
                //    break
                //}
                prev = current
                current = current.next
            }
            prev.next = current.next
        }
    }
    
    print() {
        let res = ""
        let current = this.head
        while(true) {
            if(current == null) {
                // ...
                break
            }
            res += `${current.data} -> `
            // res = res + ""
            current = current.next
        }
        return res += "null"
    } 
    // [1,2,3,4,5,...]
    // 1 -> 2 -> 2 -> null
    
    search(data) { // search(4)
        let current = this.head
        
        while(!(current == null || current.data == data)) {
            //if(current == null || current.data == data) {
            //    return current
            //}
            
            //else if (current == null ){
            //    return "Ese nodo no existe"
            //}
            current = current.next
        }
        return current
    }
    
    insert_at(data_before, data) {
        let node = new Node(data)
        node = this.search(data)
        this.search(data).next = node
    }
}

let ll = new LinkedList();

ll.insert(1)
ll.insert(2)
ll.insert(3)

ll.insert(4)
ll.insert(5)
ll.insert(6)
ll.insert(7)
ll.insert(8)

console.log(ll)

console.log(ll.print())

ll.delete(4)

console.log(ll.print())


console.log(ll.search(7))
