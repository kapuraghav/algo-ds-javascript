//         1
//       /   \
//      2     3
//     / \   /
//    4   5  6

function countNodes(node) {
    if(!node){
        return 0;
    } else {
        return 1 + countNodes(node.left)+ countNodes(node.right);
    }
}

export default countNodes;

