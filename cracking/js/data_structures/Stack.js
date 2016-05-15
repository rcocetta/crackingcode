/**
 * NOTE: Well... arrays already have functions to work as a stack
 * but we want to implement them manually to practice
 */
function Stack() {
    this.stack = [];
    function getLength() {
        return this.stack.length;
    }
    this.getLength = getLength;
}

Stack.prototype.isEmpty = function () {
    return !this.stack.length;
};
Stack.prototype.push = function (el) {
    this.stack[this.stack.length] = el;
};
Stack.prototype.pop = function () {
    var stack = this.stack,
        idx = stack.length - 1,
        el;
    if (idx < 0) {
        return;
    }
    el = stack[idx];
    this.stack.splice(idx, 1);
    return el;
};



module.exports = Stack;