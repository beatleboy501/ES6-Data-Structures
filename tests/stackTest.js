const Stack = require('../classes/stack');

const myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.storage);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("ourWord");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
