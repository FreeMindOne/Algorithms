class Node {
  constructor(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  }

  add(value) {
    if(value <= this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
    }
  }
  findMinNode() {
    if (this.left) {
      return this.left.findMinNode();
    } else {
      return this;
    }
  }

  remove(value) {
    if (value < this.value && this.left) {
      this.left = this.left.remove(value);
      return this;
    } else if (value > this.value && this.right) {
      this.right = this.right.remove(value);
      return this;
    } else if (value === this.value) {
      if (!this.left && !this.right) {
        return null;
      } else if (!this.left && this.right) {
        return this.right;
      } else if (this.left && !this.right) {
        return this.left;
      } else if (this.left && this.right) {
        let minInRight = this.right.findMinNode();
        this.remove(minInRight.value);
        this.value = minInRight.value;
        return this;
      }
    }
    return this;
  }
}



class BST {
  constructor() {
    this.root = null;
  }


  add (value) {
    if(!value) return;

    if(!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  showRoot() {
    console.log(JSON.stringify(this.root,null,2));
  }

  search(value) {

    if(!this.root) { return false; } 

    let node = this.root;

    while(node) {
      if (value < node.value) {
        node = node.left
      } else if (value > node.value) {
        node = node.right;
      } else {
        console.log(JSON.stringify(node,null,2));
        return true;
      }
    }

    return false;
  }

  remove(value) {
    this.root = this.root.remove(value);
  }
}
let binary = new BST();

binary.add(50);
binary.add(30);
binary.add(80);
binary.add(20);
binary.add(40);
binary.add(60);
binary.add(100);
binary.add(10);

binary.remove(300);

//binary.search(50);

binary.showRoot();