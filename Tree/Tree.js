class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    get left(){
        return this.left;
    }

    set seLeft(node){
        this.left = node;
        if(node){
            node.parent = this;
        }
    }

    get right() {
        return this.right;
    }
    set right(node){
        this.right = node;
        if(node){
            node.parent = this;
        }
    }

    print(){
        console.log(this.value);
    }
}

export default TreeNode;