
import { TreeNode } from "./Tree.mjs";

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const nine = new TreeNode(9);

//         1
//       /   \
//      2     3
//     / \   /
//    4   5  6

one.setLeft(two);
one.setRight(three);
two.setLeft(four);
two.setRight(five);
three.setLeft(six);
import { preOrderTraversal, inOrderTraversal, postOrderTraversal} from './TreeTraversals.mjs'
import { findMax } from "./findMaxNode.mjs";
import countAllNodes from "./countAllNodes.mjs"
import {sumOfAllLeafNodes} from "./sumOfAllLeafNodes.mjs"

 console.log(sumOfAllLeafNodes(one));
// console.log(postOrderTraversal(one));
// console.log(inOrderTraversal(one));

