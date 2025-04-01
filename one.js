removeDup([1,2,2,2,10]);
function removeDup(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDup([1,2,2,2,10]));