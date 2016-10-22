// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let count = {}, 
        i, 
        minInteger = 1;
    const N=100000;
    
    A.forEach( (el) => {
        if (el > 0) {
            count[el] = true;
        }
    });
    
    for (i=minInteger; i <= N + 1; i++) {
        minInteger = i;
        if (!count[i]) {
            break;
        }
    }
    return minInteger;
}