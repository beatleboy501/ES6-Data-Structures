class Set {

  constructor() {
    this.collection = [];
    this.has = this.has.bind(this);
    this.values = this.values.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.size = this.size.bind(this);
    this.union = this.union.bind(this);
    this.intersection = this.intersection.bind(this);
    this.difference = this.difference.bind(this);
    this.subset = this.subset.bind(this);
  }

  has(element) {
    return (this.collection.indexOf(element) !== -1);
  }

  values() {
    return this.collection;
  }

  add(element) {
    if(!this.has(element)){
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element){
    if(this.has(element)){
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(separateSet){
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = separateSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }

  intersection(separateSet){
    const intersectionSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if(separateSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  difference(separateSet){
    const differenceSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if(!separateSet.has(e)){
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  subset(separateSet){
    const firstSet = this.values();
    return firstSet.every(function(value) {
      return separateSet.has(value);
    });
  }
}

module.exports = Set;
