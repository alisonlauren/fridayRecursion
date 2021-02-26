// Initial solution
const factorial1 = (n) => {
    if(n === 1){
        return 1
    }
    return n * factorial1(--n);
}
​
//refactored solution
const factorial2 = (n) => n === 1 ? 1 : n * factorial2(--n);
