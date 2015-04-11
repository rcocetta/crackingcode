var SinglyLinkedNode = function (val) {
    this.val = val;
    this.next = null;
};

var SinglyLinkedList = function () {
    this.head = null;
    this.last = this.head;
};

SinglyLinkedList.prototype.push = function (node) {
    if (node instanceof SinglyLinkedNode) {
        if (this.head === null) {
            this.head = node;
            this.last = this.head;
        } else {
            this.last.next = node;
            this.last = this.last.next;
        }
    } else {
        throw "Node is not a SinglyLinkedNode";
    }
};

SinglyLinkedList.prototype.pushFromArray = function(arr){
    arr.forEach(function (el) {
        this.push(new SinglyLinkedNode(el));
    }.bind(this));
};

var mod = {
    SinglyLinkedList: SinglyLinkedList,
    SinglyLinkedNode: SinglyLinkedNode
};
module.exports = mod;