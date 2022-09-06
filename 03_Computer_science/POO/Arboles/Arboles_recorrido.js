class Node {
    constructor(data) {
        this.data = data
        this.left = null // El atributo this.left esta APUNTANDO a null
        this.right = null
    }
}

class Stack {
    constructor() {
        this.items = []
    }
    
    push(item) {
        //...
        this.items.push(item)
    }
    
    pop() {
        //...
        return this.items.pop()
    }
    
    peek() {
        //...
        return this.items[this.items.length - 1]
    }
    
    size() {
        //..
        return this.items.length
    }
    
    print() {
        //...
        // for(let i =this.size(); i>=0; i--) {
        //     console.log(this.items[i])
        //}
        console.log(this.items)
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root
        this.weight = 0
    }
    
    insert(data) {
        let node = new Node(data)
        
        if(this.root == null) {
            this.root = node
        } else {
            let current = this.root
            
            while(true) {
                if(current.left == null && current.data > data) {
                    current.left = node
                    break
                } else if(current.right == null && current.data < data) {
                    current.right = node
                    break
                }

                if(current.data < data) {
                    current = current.right
                } else {
                    current = current.left
                }
            }
        }
    }
    
    preorderTransversal() {
        let stack = new Stack() 
        let result = []
        let current = null
        
        stack.push(this.root)
    
        while(stack.size() !== 0) {
            current = stack.pop() // 26

            // ----- Esto cambia en los ejercicios :) 
            result.push(current.data)
            //------------------------
            
            if(current.right != null) {
                stack.push(current.right)
            }

            if(current.left != null) {
                stack.push(current.left)
            }
        }
        return result
    } // [26,14,6,19,55,54,47,30,29,53,84,58,99,87,85]
    //[26, 14, 6, 19, 55, 54, 47, 30, 29, 53, 84, 58, 99, 87, 85]
    
}


let bst1 = new BinarySearchTree()

bst1.insert(26)
bst1.insert(55)
bst1.insert(14)
bst1.insert(19)
bst1.insert(6)
bst1.insert(84)
bst1.insert(54)
bst1.insert(99)
bst1.insert(87)
bst1.insert(47)
bst1.insert(53)
bst1.insert(30)
bst1.insert(29)
bst1.insert(85)
bst1.insert(58)

console.log(bst1.preorderTransversal())
