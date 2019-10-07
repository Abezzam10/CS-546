function checkArr(arr) {
    // validate the input array

    if (!Array.isArray(arr)) {
      throw 'Error: The input is not an array!';
    }
  
    if (arr.length == 0) {
      throw 'Empty array';
    }
  
    return arr
}

function head(array) {
    checkArr(array);
    return array[0]
}

function last(array) {
    checkArr(array);
    return array[array.length - 1]
}

function remove(array, index) {
    checkArr(array);
    if (typeof index != 'number' || index >= array.length) {
    throw 'The index should be an number and should be less than array length!';
    }

    return array.slice(0, index).concat(array.slice(index + 1))
}

function range(end, value) {
    if (typeof end != 'number' || end === 0) {
    throw 'The end input is invalid!';
    }

    array = [];

    for (let i = 0; i < end; i++) {
    val = value === undefined ? i : value;
    array[i] = val;
    }

    return array
}

function countElements (array) {
    if (!Array.isArray(array) || array === "undefined") {
    throw 'Your array is invalid';
    }

    let i = 0;
    let result = new Object();
    while (i < array.length) {
      if (map.hasOwnProperty(array[i])) {
        map[array[i]]++;
    } else {
        map[array[i]]=1;
    }
    i++;
    }
    return result;
}

function isEqual (arrayOne, arrayTwo) {
    //arrayOne checker
    if (!(Array.isArray(arrayOne))) {
        throw 'Array 1 is not an array!';
    }

    //arrayTwo checker
    if (!(Array.isArray(arrayTwo))) {
        throw 'Array 2 is not an array!';
    }

    if (arrayOne.length != arrayTwo.length) {
        return false
    }
    
    for (let i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]) {
        return false
    }

    }
    
    return true
}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};  