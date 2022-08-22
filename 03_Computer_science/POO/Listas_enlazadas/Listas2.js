/*2.- Escribir un programa para formar una lista que realice
 las siguientes tareas:
a) Crear una Lista Enlazadas de Números Enteros Positivos al
 azar, la inserción se realiza por el último nodo.
b) Recorrer la lista para mostrar los Elementos por pantalla.
 —
c) Mostrar todos los Nodos que superen un valor determinado.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    
    insert(data) {
    
        let node = new Node(data)
    
        if(this.head == null) {
            this.head = node;
        } else {
            let current = this.head
            for(let i = 0; i < this.size; i++) {
                if(current.next == null) {
                    current.next = node
                } else {
                    current = current.next
                }  
            }
        }
        
        this.size = this.size + 1
    }
    
    delete(data) {        
        let current = this.head
        let anterior = current;
        for(let i = 0; i < this.size; i++) {
            if(current.data == data) {
                //current.next = node
                anterior.next = current.next
            } else {
                anterior = current
                current = current.next
            }
        }
        
        this.size = this.size - 1
    }
    
    search(data) {
        let current = this.head
        for(let i = 0; i < this.size; i++) {
            if(current.data == data) {
                //current.next = node
                return current
            } else {
                current = current.next
            }
        }
    }

    print() {
      let current = this.head
      let res = ""
      while(current.next != null) {

        res+= `${current.data} -> `

        current = current.next
      }
      console.log(res)
    }

    print_more_than(num) {
      let current = this.head
      let res = ""
      while(current.next != null) {

        if(current.data > num) {
          // console.log(current.data)
          res += `${current.data}, `
        }

        current = current.next
      }
      console.log(res)
    }

}

/*2.- Escribir un programa para formar una lista que realice las siguientes tareas:
a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
b) Recorrer la lista para mostrar los Elementos por pantalla.
c) Mostrar todos los Nodos que superen un valor determinado. 
*/


// a)
function random_int(max=100) {
    return Math.round(Math.random()*max)
}

function create_random_ll() {
  let ll = new LinkedList();

  for(let i = 0; i < 10 ;i++) {
    ll.insert(random_int())
  }
  return ll
}

// b)
let l = create_random_ll()
l.print()

// c)
l.print_more_than(54)


