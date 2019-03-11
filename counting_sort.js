"use strict"

function CountingSort(arr) {
    let n = arr.length, countArr = [], newArr = [];

    for (let i = 0; i < n; i++) {
        countArr[i] = 0;
    }
    for (let j = 0; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if(arr[j] < arr[k]) {
                countArr[k]++;
            } else {
                countArr[j]++;
            }
        }
    }
    for (let l = 0; l < n; l++) {
        newArr[countArr[l]] = arr[l];
    }

    return newArr;
}

console.log(CountingSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15,]));