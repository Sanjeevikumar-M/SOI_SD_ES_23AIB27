removeDup([1,2,2,2,10]);
function removeDup(arr) {
    let result = [];
    for (let value of arr) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
console.log(removeDup([1,2,2,2,10]));