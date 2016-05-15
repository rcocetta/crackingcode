var assert = require('assert'),
    Stack = require('./Stack');
describe("Stack functionalities - ", function () {
    it("should be empty as soon as it's created", function() {
        var s = new Stack();
        assert.equal(s.isEmpty(), true);
    });

    it ("should not be empty when something is insterted", function () {
        var s = new Stack();
        assert.equal(s.getLength(), 0);
        s.push(1);
        assert.equal(s.getLength(), 1);
        s.push(2);
        assert.equal(s.getLength(), 2);
    });

    it("should push and pop with LIFO approach", function () {
        var s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        assert.equal(s.pop(), 3);
        assert.equal(s.isEmpty(), false);
        assert.equal(s.pop(), 2);
        assert.equal(s.pop(), 1);
        assert.equal(s.isEmpty(), true);
        assert.equal(s.pop(), undefined);
    });
});