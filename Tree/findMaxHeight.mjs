
function findMax(a, b) {
    if(a > b){
        return a;
    } else if(b > a){
        return b;
    } else {
        return a;
    }

}

export function findMaxHeight(node) {
    if(!node){
        return 0;
    }
    let lh = findMaxHeight(node.left);
    let rh = findMaxHeight(node.right);
    return 1 + findMax(lh, rh)
}