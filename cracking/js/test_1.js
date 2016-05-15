var assert = require('assert'),
    mod = require('./chapter1');

console.dir(mod);

describe ("Chapter 1 - Ex 1.1", function () {
    it("Should find all unique chars in 'asdfg'", function () {
        var res = mod.checkStringUnique('asdfg');
        assert.equal(res, true);
    });
    it("Should find not all unique chars in 'asdafg'", function () {
        var res = mod.checkStringUnique('asdafg');
        assert.equal(res, false);
    });
    it("Should find all unique chars in 'a'", function () {
        var res = mod.checkStringUnique('a');
        assert.equal(res, true);
    });
    it("Should know that an empty string doesn't have all unique chars", function () {
        var res = mod.checkStringUnique('');
        assert.equal(res, false);
    });

});