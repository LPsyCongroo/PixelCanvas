/**
 * We need to create a linked list
 * 
 * it will consist of nodes
 * Each node will have a pointer that points to the next Node\
 * Each node will have the data stored on it
 * 
 * We will need a method to add a node, remove a node, and replace a node.
 * 
 * 
 */

function Node(data, next){
  this.data = data;
  this.next = next;
}

function LinkedList(firstNode = new Node()){
  this.currentNode = firstNode;
}

LinkedList.prototype.addNode = function(data, index) {
  if(index < 0)
    throw new Error('index must be a positive integer');
  else if(index > 0){
    // Decouple previous nodes if we are not at position 0
    this.getNode(index-1).next = null;
  }
  const newNode = new Node(data, this.currentNode);
  this.currentNode = newNode;
};

LinkedList.prototype.getNode = function(index){
  let counter = 0;
  function recurse(node){
    if(counter === index) return node;
    counter ++;
    return recurse(node.next);
  }
  return this.currentNode = recurse(this.currentNode);
}

const myList = new LinkedList();
myList.addNode('0');
myList.addNode('1');
myList.addNode('2');
myList.addNode('3');
myList.addNode('4');
myList.addNode('5');
myList.addNode('6');
myList.addNode('7');
console.log(myList);

console.log(myList.getNode(3));

