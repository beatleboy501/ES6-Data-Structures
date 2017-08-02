class HashTable {

  constructor(limit) {
    this.storage = [];
    this.storageLimit = limit ? limit : 10;
    this.print = this.print.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.lookup = this.lookup.bind(this);
  }

  static hash(string, max) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = HashTable.hash(key, this.storageLimit);
    if(this.storage[index] === undefined) {
      this.storage[index] = [
          [key, value]
      ];
    } else {
      let inserted = false;
      for(let i = 0; i < this.storage[index].length; i++) {
        if(this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if(inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    const index = HashTable.hash(key, this.storageLimit);
    if(this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for(let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    const index = HashTable.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
}

module.exports = HashTable;

// Hash table time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(1)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(n)       ║
// ║ Delete    ║ O(1)    ║ O(n)       ║
// ╚═══════════╩═════════╩════════════╝
