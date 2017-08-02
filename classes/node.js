class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.keys = new Map();
    this.end = false;
    this.setEnd = this.setEnd.bind(this);
    this.isEnd = this.isEnd.bind(this);
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

module.exports = Node;
