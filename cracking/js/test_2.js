var assert = require('assert'),
    mod = require('./chapter2'),
    LinkedLists = require('./data_structures/LinkedLists');

console.dir(mod);

describe ("Chapter 2 - Ex 2.2", function () {

    it("Should return null if n > len(list)", function () {
        var list = new LinkedLists.SinglyLinkedList(),
            res;
        list.pushFromArray([1,2,3]);
        res = mod.nthToLast(list, 5);
        assert.equal(res, null);
    });

    it("Should return the node containing 5", function () {
        var list = new LinkedLists.SinglyLinkedList(),
            res;
        list.pushFromArray([1,2,3,4,5]);
        res = mod.nthToLast(list, 1); //1st to last is last
        assert.equal(res.val, 5);
    });
     it("Should return the node containing 3", function () {
        var list = new LinkedLists.SinglyLinkedList(),
            res;
        list.pushFromArray([1,2,3,4,5]);
        res = mod.nthToLast(list, 3);
        assert.equal(res.val, 3);
    });
    it("Should return the node containing 1", function () {
        var list = new LinkedLists.SinglyLinkedList(),
            res;
        list.pushFromArray([1,2,3,4,5]);
        res = mod.nthToLast(list, 5);
        assert.equal(res.val, 1);
    });
});