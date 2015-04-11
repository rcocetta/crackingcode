


var mod = {
    /*
    2.1
    Write an algorithm to find the nth to last element in a singly linked list
    Based on the structure of "SingleLinkedList" in data_structures/LinkedLists.js
    */
    nthToLast: function (list, n) {
        var head = list.head,
            curr = head,
            len = 0;
        while (curr !== null) {
            curr = curr.next;
            len++;
        }
        if (n > len) {
            return null;
        }
        curr = head;
        while (len > n) {
            curr = curr.next;
            len--;
        }
        return curr;
    }
};


module.exports = mod;