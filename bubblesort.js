function bubbleSort(array) {

    // while(array[0] > array[1]) {}
    for (var x = 0; x < array.length - 1; x++) {
        // console.log(array[0]);
        // if (array[x] < array[x + 1]) {
        //     continue;
        // }
        // for (var i = 0; i < array.length - x - 1; i++) {
        for (var i = 0; i < array.length - 1; i++) {
            // console.log("inner loop: " + array[i] + " index: " + i);
            if (array[i] > array[i + 1]) {
                swap(array, i);
            }    
            else {
                // break;
                continue;
            }
        }
    }
    return array;
}

var swapCount = 0;

function swap(array, index1) {
    swapCount ++;
    var Temp1 = array[index1];
    var Temp2 = array[index1 + 1];
    array[index1] = Temp2;
    array[index1 + 1] = Temp1;
}
