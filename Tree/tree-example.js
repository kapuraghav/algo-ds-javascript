class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    getLeft(){
        return this.left;
    }

    setLeft(node){
        this.left = node;
        if(node){
            node.parent = this;
        }
    }

    getRight() {
        return this.right;
    }

    setRight(node){
        this.right = node;
        if(node){
            node.parent = this;
        }
    }

    print(){
        console.log(this.value);
    }
}


const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);

one.setLeft(two);
one.setRight(three);
two.setLeft(four);
two.setRight(five);
three.setLeft(six);

//         1
//       /   \
//      2     3
//     / \   /
//    4   5  6
function inOrderTraversal(node) {
    if(node.left){
        inOrderTraversal(node.left)
    }
    node.print();
    if(node.right){
        inOrderTraversal(node.right);
    }
}

function preOrderTraverSal(node) {
    node.print();
    if(node.left){
        inOrderTraversal(node.left)
    }
    if(node.right){
        inOrderTraversal(node.right);
    }
}


function postOrderTraverSal(node) {
    if(node.left){
        inOrderTraversal(node.left)
    }
    if(node.right){
        inOrderTraversal(node.right);
    }
    node.print();
}

function countNodes(node) {
    if(!node){
        return 0;
    } else {
       return 1 + countNodes(node.left)+ countNodes(node.right)
    }
}

function findMax(node){
    if(!node){
        return -Infinity;
    } else {
        var root = node.value;
        let lM = findMax(node.left);
        let rM = findMax(node.right);
        if(lM > root){
            root = lM;
        }
        if(rM > root){
            root = rM;
        }
        return root;
    }
}


// preOrderTraverSal(one);
// console.log('+++++');
// postOrderTraverSal(one);
// console.log('+++++');
// inOrderTraversal(one);
console.log('++++++++');
console.log(findMax(one));