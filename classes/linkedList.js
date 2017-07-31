class LinkedList {
  
  constructor(element){
    this.length = 0;
    this.element = element;
    this.next = null;
    this.size = this.size.bind(this);
    this.add = this.add.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.indexOf = this.indexOf.bind(this);
    this.removeAt = this.removeAt.bind(this);
    this.addAt = this.addAt.bind(this);
    this.elementAt = this.elementAt.bind(this);
    this.items = this.items.bind(this);
  }

  size(){
    return this.length;
  };

  items(){
    let currentNode = this.head;
    const arr = [];
    while(currentNode){
      arr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return arr;
  }

  add(element) {
    let node = new LinkedList(element);
    if (this.head === null || typeof this.head === 'undefined') {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node;
    }
    this.length++;
  };

  remove(element) {
    let currentNode = this.head;
    let previousNode;
    let index = 0;
    if (currentNode.element === element) {
      this.head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }
      previousNode.next = currentNode.next
    }
    this.length--;
    return index;
  };

  isEmpty() {
    return this.length === 0;
  };

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next
    }
    return currentNode.element;
  };

  addAt(index, element) {
    let node = new LinkedList(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  };

  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if(index < 0 || index >= this.length) {
      return false;
    }
    if(index === 0){
      this.head = currentNode.next;
    } else {
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next
    }
    this.length --;
    return currentNode.element;
  }
}

module.exports = LinkedList;

// Linked list time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝
