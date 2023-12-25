function findCommonElements(arr1, arr2) {
    var commonElements = [];

    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var num1 = arr1_1[_i];

        var found = false;
        for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
            var num2 = arr2_1[_a];
            if (num1 === num2) {
                found = true;
                break;
            }
        }

        if (found && commonElements.indexOf(num1) === -1) {
            commonElements.push(num1);
        }
    }
    return commonElements;
}



//example1

console.log('example1: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7] ----> ',findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//example2
console.log('example2: [1, 2, 33,1,3, 4, 5] and [1, 44, 5,2, 6,4,43, 72] ----> ',findCommonElements([1, 2, 33,1,3, 4, 5], [1, 44, 5,2 ,6,4,43, 72]));

