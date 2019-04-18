class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
    this.height = 0;
  }

  leftHeight() {
    if (!this.left) return -1;

    return this.left.height;
  }

  rightHeight() {
    if (!this.right) return -1;

    return this.right.height;
  }

  computeHeight() {
    return Math.max(this.leftHeight(), this.rightHeight())+1;
  }

  rotateRight() {
    let leftChild = this.left;
    this.left = leftChild.right;
    leftChild.right = this;
    this.height = this.computeHeight();
    leftChild.height = leftChild.computeHeight();

    return leftChild;    
  }
  rotateLeft() {
    let rightChild = this.right;
    this.right = rightChild.left;
    rightChild.left = this;
    this.height = this.computeHeight();
    rightChild.height = rightChild.computeHeight();

    return rightChild;
  }

  balanceFactor() {
    return this.rightHeight() - this.leftHeight();
  }

  balance() {
    this.height = this.computeHeight();
    const bFactor = this.balanceFactor();
    if (bFactor === -2) {
      if (this.left.right) {
        this.left = this.left.rotateLeft();
      }
        
      return this.rotateRight();
    } else if (bFactor === 2) {
        if (this.right.left) {
          this.right = this.right.rotateRight();
        }

      return this.rotateLeft();
    }

    return this;
  }

  add(value) {
    if(value <= this.value) {
      if (this.left) {
        this.left = this.left.add(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right = this.right.add(value);
      } else {
        this.right = new Node(value);
      }
    }    

    return this.balance();
  }

  findMin() {
    if(!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  delete(value, node) {
    if(!node) return null;
    if (value < node.value) {
      node.left = node.delete(value, node.left);
      return node.balance();
    } else if (value > node.value) {
      node.right = node.delete(value, node.right);
      return node.balance();
    } else if (value === node.value) {
      if (!node.left && !node.right) {
        return null;
      } else if (node.left && !node.right) {
        return node.left;
      } else if (!node.left && node.right) {
        return node.right;
      } else if (node.left && node.right) {
        let minInRight = node.right.findMin();
        node.right = node.delete(minInRight.value, node.right);
        node.value = minInRight.value;
        return node.balance();
      }
    }
  }
}


class AvlTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if(!this.root) {
      this.root = new Node(value);
    } else {
      this.root = this.root.add(value);
    }
  }

  delete(value) {
    if (this.root) {
      this.root = this.root.delete(value, this.root);
    } else {
      throw new Error("empty tree");
    }
  }

  contains(value) {
    if(!this.root) {
      return false;
    }
    let node = this.root;
    while(node) {
      if(value < node.value) {
        node = node.left;
      } else if(value > node.value) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  inOrder(node) {

    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {

    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {

    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  

  getRoot() {
    return this.root;
  }
}


let avl = new AvlTree();
avl.add(50);
avl.add(30);
avl.add(80);
avl.add(20);
avl.add(40);
avl.add(60);
avl.add(100);
avl.add(10);

avl.delete(30);


avl.postOrder(avl.getRoot());


console.log(avl.contains(10));


//                  50
//              30      80
//            20  40  60  100
//          10  
//      
//console.log(JSON.stringify(avl, null, 2));

//                  50
//              20      80
//            10  40   60  100
//
//      