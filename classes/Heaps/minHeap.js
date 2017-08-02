class MinHeap {

  constructor() {
    this.heap = [null];
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.sort = this.sort.bind(this);
  }

  insert(num) {
    this.heap.push(num);
    if(this.heap.length > 2) {
      let index = this.heap.length - 1;
      while(this.heap[index] < this.heap[Math.floor(index/2)]) {
        if (index >= 1) {
          [this.heap[Math.floor(index/2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index/2)]];
          if (Math.floor(index/2) > 1) {
            index = Math.floor(index/2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }

  sort() {
    let result = [];
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  }
}

module.exports = MinHeap;
