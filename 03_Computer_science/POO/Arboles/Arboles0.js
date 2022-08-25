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
            while((current.left !== null && current.right !== null)){

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


let bst =  new BinarySearchTree()
bst.insert(26)
bst.insert(55)
bst.insert(14)
bst.insert(19)
bst.insert(6)
bst.insert(84)
bst.insert(54)
bst.insert(99)
bst.insert(87)
bst.insert(47)
bst.insert(53)
bst.insert(30)
bst.insert(29)
bst.insert(85)
bst.insert(58)

console.log(bst)
