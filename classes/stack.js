class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.size = this.size.bind(this);
    this.peek = this.peek.bind(this);
  }

  // Adds a value onto the end of the stack
  push(value){
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size(){
    return this.count;
  }

  // Returns the value at the end of the stack
  peek(){
    return this.storage[this.count - 1];
  }
}

module.exports = Stack;

// Stack time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝
