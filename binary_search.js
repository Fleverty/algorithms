const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Which element do you find?", (element) => {
    console.log(binarySearch(+element, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    readline.close();
})

function binarySearch(element, array) {
    console.log(element, array);
    let start = 0;
    let end = array.length - 1;
    let middle = Math.round((end + start) / 2);
    let counter = 0;
    while(start <= end) {
        counter++;
        middle = Math.round((end + start) / 2);
        console.log(start, middle, end);
        if(element === array[middle]) return `Element(${element}) on ${middle} position was found by ${counter} steps]`;
        else if(element > array[middle]) start = middle + 1;
        else if(element < array[middle]) end = middle - 1;
    }
    return `Not found by ${counter} steps`;
}
