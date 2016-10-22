// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let count = [], 
        i, 
        perm = true, 
        l = A.length;
    A.some((el, idx) => {
        perm = (el <= l) && (!count[el]);
        count[el]=1;
        return !perm;
    });
    
    return 0 + perm;
}