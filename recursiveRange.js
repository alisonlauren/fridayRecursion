//initial
const recursiveRange = (n) => {
    if(n === 1) return 1;
​
    return n + recursiveRange(--n);
}
​
//refactored
const recursiveRange2 = (n) => n === 1 ? 1 : n + recursiveRange2(--n);
