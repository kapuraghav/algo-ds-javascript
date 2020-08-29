function inOrderTraversal(node) {
    if(node.left){
        inOrderTraversal(node.left)
    }
    node.print();
    if(node.right){
        inOrderTraversal(node.right);
    }
}

function preOrderTraversal(node) {
    node.print();
    if(node.left){
        preOrderTraversal(node.left)
    }
    if(node.right){
        preOrderTraversal(node.right);
    }
}

function postOrderTraversal(node) {
    if(node.left){
        postOrderTraversal(node.left)
    }
    if(node.right){
        postOrderTraversal(node.right);
    }
    node.print();
}

export { inOrderTraversal, preOrderTraversal, postOrderTraversal }