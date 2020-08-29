export class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    getLeft(){
        return this.left;
    }

    setLeft(node){
        this.left = node;
    }

    getRight() {
        return this.right;
    }

    setRight(node){
        this.right = node;
    }

    print(){
        console.log(this.value);
    }
}