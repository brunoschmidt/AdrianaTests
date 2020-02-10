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

function test(array, begin, count, items) {
    let cp = array.slice(0);
    
    let kept = splice(array, begin, count, items);

    console.log(arguments[1], arguments[2], arguments[3] , cp, array, kept);
}

test([1, 2, 3], 4, 1, 'a');
test([1, 2, 3], 3, 1, 'a');
test([1, 2, 3], 2, 1, 'a');
test([1, 2, 3], 1, 1, 'a');
test([1, 2, 3], 0, 1, 'a');
test([1, 2, 3], -1, 1, 'a');
test([1, 2, 3], -2, 1, 'a');
test([1, 2, 3], -3, 1, 'a');

test([1, 2, 3], 4, 0, 'a');
test([1, 2, 3], 3, 0, 'a');
test([1, 2, 3], 2, 0, 'a');
test([1, 2, 3], 1, 0, 'a');
test([1, 2, 3], 0, 0, 'a');
test([1, 2, 3], -1, 0, 'a');
test([1, 2, 3], -2, 0, 'a');
test([1, 2, 3], -3, 0, 'a');

