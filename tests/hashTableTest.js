const HashTable = require('../classes/hashTable');

console.log(HashTable.hash('quincy', 10));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();
