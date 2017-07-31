const LinkedList = require('../classes/linkedList');

const conga = new LinkedList();
console.log(conga.isEmpty());
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.items());
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.items());
console.log(conga.remove('Fish'));
console.log(conga.items());
console.log(conga.size());
console.log(conga.isEmpty());
