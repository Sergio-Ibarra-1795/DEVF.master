//Escribe una función que daod un arbol binario A, obtenga una copia del mismo 

class Node {
    constructor(data) {
        this.data = data
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree {
    constructor(root = null){
        this.root = root
    }
    insert(data) {
        let node = new Node(data)
        if(this.root == null) {
            this.root = node
        } else {
            let current = this.root
            while(current.left !== null && current.right !== null){
                if (current.data<data){

                    current = current.right
                } else {
                    current = current.left
                }
            }

            if(current.data<data){
                current.right = node

            } else {
                current.left = node
            }
           
        } 
    }
}


let bstA =  new BinarySearchTree()
bstA.insert(26)
bstA.insert(55)
bstA.insert(14)
bstA.insert(19)
bstA.insert(6)
bstA.insert(84)
bstA.insert(54)
bstA.insert(99)
bstA.insert(87)
bstA.insert(47)
bstA.insert(53)
bstA.insert(30)
bstA.insert(29)
bstA.insert(85)
bstA.insert(58)

console.log(bstA)


function CopiaArbol(BinarySearchTree){

    let node = new Node(BinarySearchTree[0])
        if(this.root == null) {
            this.root = node
        } else {
    let current = this.root

    while(current.left !== null && current.right !== null){
        if (current.data<data){
            current = current.right
        } else {
            current = current.left
        }
    }

    if(current.data<data){
        current.right = node

    } else {
        current.left = node
    }
    return current;
}
}

bstB = CopiaArbol(bstA)

console.log(bstB)



function search(data) {
    if(this.root.data == data) {
        return this.root
    } else {
        let current = this.root

        while(true) {
            // current = N(14) 
            if(current.right != null && current.data < data) {
                current = current.right
            } else if (current.left != null && current.data > data) {
                current = current.left
            } else {
                break
            }
        }
    
        return current
    }
}