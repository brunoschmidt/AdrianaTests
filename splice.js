function splice(arr, begin, count, items) {
    if (begin === undefined) {
        begin = 0;
    }
    if (count === undefined) {
        count = 0;
    }

    let start = arr.slice(0, begin);
    let kept = arr.slice(begin, begin + count);
    let end = arr.slice(begin + count);

    let result;
    if (items !== undefined) {
        result = start.concat(items).concat(end);
    } else {
        result = start.concat(end);
    }

    for (let index = 0; index < result.length; index++) {
        arr[index] = result[index];
    }
    let countClear = arr.length - result.length;
    for (let index = 0; index < countClear; index++) {
        arr.pop();
    }

    return kept;
}

let array = [1, 2, 3];
console.log(array);

let kept = splice(array, 1, 3, 'a');

console.log(array);
console.log(kept);
