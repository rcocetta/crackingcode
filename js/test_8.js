var assert = require('assert'),
    mod = require('./chapter8');

describe ("Chapter 8 - Ex 8.2", function () {
    it("Should find all the paths in a 3x3", function () {
        var expected = [  [ 'down', 'down', 'right', 'right' ],
                      [ 'down', 'right', 'down', 'right' ],
                      [ 'down', 'right', 'right', 'down' ],
                      [ 'right', 'down', 'down', 'right' ],
                      [ 'right', 'down', 'right', 'down' ],
                      [ 'right', 'right', 'down', 'down' ] ];
        var grid = [[1,1,1],[1,1,1],[1,1,1]];
        var paths = mod.robot(grid);
        assert.deepEqual(paths, expected);
    });
    it("Should find all the paths in a 3x3 with the bottom left, and bottom centre blocked", function () {
        var expected = [
                      [ 'down', 'right', 'right', 'down' ],
                      [ 'right', 'down', 'right', 'down' ],
                      [ 'right', 'right', 'down', 'down' ] ];
        var grid = [[1,1,1],[1,1,1],[0,0,1]];
        var paths = mod.robot(grid);
        assert.deepEqual(paths, expected);
    });
    it("Should find all the paths in a 2x2 ", function () {
        var expected = [[ 'right', 'down']];
        var grid = [[1,1],[0,1]];
        var paths = mod.robot(grid);
        assert.deepEqual(paths, expected);
    });
    it("Should deal with undefined and empty", function () {
        var expected = [];
        var grid = [];
        var paths = mod.robot(grid);

        assert.deepEqual(paths, expected);
        paths = mod.robot();
        assert.deepEqual(paths, expected);
    });
});