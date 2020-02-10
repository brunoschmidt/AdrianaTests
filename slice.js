const mySlice = (arr, begin, end) => {
    if (begin === undefined) {
        begin = 0;
    } else if (begin < 0) {
        begin = arr.length + begin;
    }

    if (end === undefined) {
        end = arr.length;
    } else if (end < 0) {
        end = (arr.length + end);
    }

    let copyArr = [];

    for (let i = begin; i < end; i++) {
        copyArr.push(arr[i]);
    }

    return copyArr;
}

console.log(mySlice([1, 2, 3, 4], 1, 2));