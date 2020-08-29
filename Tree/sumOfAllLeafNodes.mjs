var sum = 0;
export function sumOfAllLeafNodes(node) {
    if (!node) {
        return;
    }
    if (!node.left && !node.right) {
        // this is true only for leaf node
        sum += node.value;
    }
    sumOfAllLeafNodes(node.left);
    sumOfAllLeafNodes(node.right);
}


