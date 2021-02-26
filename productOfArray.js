const productOfArray = (arr) => {
    let total = 1;
​
    if(arr.length === 0){
        return total;
    }
    total = arr[0] * productOfArray(arr.slice(1));
    return total;
}