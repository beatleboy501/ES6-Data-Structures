class MaxHeap {

  constructor() {
    this.heap = [null];
    this.print = this.print.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  print() {
    return heap;
  }

  insert(num) {
    const h = this.heap;
    h.push(num);
    if(h.length > 2) {
      let index = h.length - 1;
      while(h[index] > h[Math.floor(index/2)]) {
        if(index >= 1) {
          [h[Math.floor(index/2)], h[index]] = [h[index], h[Math.floor(index/2)]];
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
    const heap = this.heap;
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }
}

module.exports = MaxHeap;

// Binary heap time complexity
// ╔═══════════╦══════════╦════════════╗
// ║ Algorithm ║ Average  ║ Worst Case ║
// ╠═══════════╬══════════╬════════════╣
// ║ Space     ║ O(n)     ║ O(n)       ║
// ║ Search    ║ O(n)     ║ O(n)       ║
// ║ Insert    ║ O(1)     ║ O(log n)   ║
// ║ Delete    ║ O(log n) ║ O(log n)   ║
// ║ Peek      ║ O(1)     ║ O(1)       ║
// ╚═══════════╩══════════╩════════════╝
