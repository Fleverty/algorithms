const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = [];

readline.question("How many elements in list?", (size) => {
    array = [...Array(+size).keys()];
    
    readline.question("Which element do you find?", (element) => {
        console.log('BASIC SEARCH:');
        console.log(basicSearch(+element, array), '\n');
        console.log('BINARY SEARCH:');
        console.log(binarySearch(+element, array), '\n');
        readline.close();
    })
});

function binarySearch(element, array) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.round((end + start) / 2);
    let counter = 0;
    while(start <= end) {
        counter++;
        middle = Math.round((end + start) / 2);
        if(element === array[middle]) return `Element(${element}) on ${middle} position was found by ${counter} steps`;
        else if(element > array[middle]) start = middle + 1;
        else if(element < array[middle]) end = middle - 1;
    }
    return `Not found by ${counter} steps`;
}

function basicSearch(element, array) {
    let index = 0;
    while(array[index] !== element && index < array.length) {
        index++
    }
    if(index < array.length) {
        return `Element(${element}) on ${index} position was found by ${index} steps`;
    } else {
        return `Not found by ${index} steps`;
    }
}
