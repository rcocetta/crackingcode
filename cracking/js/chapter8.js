
var mod = {
    /*
    8.2

    Imagine a robot sitting on the upper left hand corner of an NxN grid. The robot can only move in two directions: right and down. How many possible paths are there for the robot?
    FOLLOW UP
    Imagine certain squares are “off limits”, such that the robot can not step on them. Design an algorithm to get all possible paths for the robot.
    */
    /*
        We'll implement only the "FOLLOW UP"
        Let's assume that the "off limits" squares are marked with a 0 and the others with other numbers
     */
    robot: function (grid) {
        var N = grid ? grid.length || 0 : 0, //init N depending on the passed grid
            paths = [];

        takeStep = function(i, j, dir, path) {
            if (grid[i][j] === 0) {
                return null;
            } else {
                path.push(dir);
                if ((i === N-1) && (j === N-1)) {
                    //we reached the end
                    paths.push(path);
                    return;
                }
                if (i < N-1) {
                    takeStep(i+1, j, "down", path.slice(0));
                }
                if (j < N-1) {
                    takeStep(i, j+1, "right", path.slice(0));
                }
            }
        }
        if (N >= 2) {
            //if this is not the case, we can't moves
            takeStep(1, 0, "down", []);
            takeStep(0, 1, "right", []);
        }

        return paths;
    }
};


module.exports = mod;