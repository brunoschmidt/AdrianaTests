function splice(arr, begin, count, items) {
    if (begin === undefined) {
        begin = 0;
    } else if (begin < 0) {
        begin = arr.length + begin;
    }
    if (count === undefined) {
        count = 0;
    }

    // separa os pedaços
    let start = arr.slice(0, begin);
    let kept = arr.slice(begin, begin + count);
    let end = arr.slice(begin + count);

    // junta os pedaços necessários
    let result;
    if (items !== undefined) {
        result = start.concat(items).concat(end);
    } else {
        result = start.concat(end);
    }

    // move para o array original
    for (let index = 0; index < result.length; index++) {
        arr[index] = result[index];
    }
    // remove os itens excedentes
    arr.length = result.length;

    // retorna o que foi substituido
    return kept;
}

let array = [1, 2, 3];
console.log(array);

let kept = splice(array, -2, 1, 'a');

console.log(array);
console.log(kept);
