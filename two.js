function WordCount(str) {
    let totalSoFar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") { 
            totalSoFar += 1; 
            str[i+1].toUpperCase();
            str.slice(i+1);
        }
    }
    totalSoFar += 1; 
    return totalSoFar, str[0].toUpperCase() + str.slice(1);
}
  
console.log(WordCount("im raghu"));