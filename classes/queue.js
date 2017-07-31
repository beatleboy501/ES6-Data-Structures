class Queue {

  constructor() {
    this.collection = [];
    this.print = this.print.bind(this);
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.front = this.front.bind(this);
    this.size = this.size.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  print(){
    console.log(this.collection);
  }

  enqueue(element){
    // if there is a priority then insert that logic here
    this.collection.push(element);
  }

  dequeue(){
    return this.collection.shift();
  }

  front(){
    return this.collection[0];
  }

  size(){
    return this.collection.length;
  }

  isEmpty(){
    return this.collection.length === 0;
  }
}

module.exports = Queue;

// Queue time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝
