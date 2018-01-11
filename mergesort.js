function split(wholeArray) {
    // console.log("splitting");
    let splitIndex = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, splitIndex);
    let secondHalf = wholeArray.slice(splitIndex);

    return [firstHalf, secondHalf];
}

function merge(array1, array2) {
    var output = [];
    var x = 0;
    var y = 0;
    // while(x < array1.length && y < array2.length) {
    while(array1.length > 0 || array2.length > 0) {
        if (array1.length == 0) {
            output.push(array2.shift());
        }
        else if (array2.length == 0) {
            output.push(array1.shift());
        }
        if (array1[0] < array2[0]) {
            output.push(array1.shift());
        }
        else if (array1[0] > array2[0]) {
            output.push(array2.shift());
        }
    }
    return output;
}

function mergeSort(array) {
    var splitArrays = split(array);
    var output = [];
    if (array.length <= 1) {
        return array;
    }
    else {
        return merge(mergeSort(splitArrays[0]), mergeSort(splitArrays[1]));
        // return mergeSort(split(array)[0]).concat(mergeSort(split(array)[1]));
    }
}