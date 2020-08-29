export function findMax(node){
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