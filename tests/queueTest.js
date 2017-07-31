const Queue = require('../classes/queue');

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();
