const reverse = (str) => {
    let newStr = '';
    if(str.length === 0) return newStr;
​
    newStr += str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    return newStr;
}
