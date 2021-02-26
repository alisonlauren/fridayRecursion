const perm = (array) => {
    const foundPerms = [];
​
    const permHelper = (subArr, currentPerm) => {
        //Base Case
        if (subArr.length === 0){
            foundPerms.push(currentPerm)
        }
        for(let i = 0; i < subArr.length; i++){
            const newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));
            const newCurrentPerm = currentPerm.concat(subArr[i]);
            permHelper(newSubArr, newCurrentPerm)
        }
    }
​
    permHelper(array, [])
    return foundPerms;
}