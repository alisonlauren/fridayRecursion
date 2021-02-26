// Initial Solution
const fib = (n) => {
    if(n <= 2){
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
​
//refactor
const fib2 = (n) => n <= 2 ? 1 : fib2(n-1) + fib2(n-2)