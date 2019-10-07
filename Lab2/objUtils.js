function checkObj(obj) {

    if (typeof obj != 'object') {
        throw 'The input must be an object!';
    }
    if(typeof obj == 'undefined') {
        throw "Undefined object";
    }
    return obj
}

function isEmpty(obj) {

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) return false;
    }
    return true;
}

function extend(...args) {
let retro= args;
let result = new Object();
checkObj(args);

for(i of args){
    var obj = i;
    if(typeof i == undefined)
        throw "Object is undefined in extend";
    if(isEmpty(i)){
        throw "Undefined object in extend";
    }
    Object.keys(obj).forEach(function(key) {
        if(!result.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
});
}
return output;
}

function smush(...args) {
    //Check atleast 2 arguments
    if (args.length < 2) {
        throw "No arguments suffice ";
    }
    //for every key in the array, check if is an object and is not defined
    for (let obj of args) {
        checkObj(obj);
    }
    return Object.assign({}, ...objLst)
}

function mapValues(object, func) {
    //case to throw error when object is of proper type
    if(typeof object != 'object') {
        throw "Object is not defined"
    }
    //case to throw when func is of proper type
    if(typeof func != 'function') {
        throw "Function is not defined";
    }
    for(let i in object) {
        object[i] = func(object[i]);
    }
    return object;
}

module.exports= {
    extend,
    smush,
    mapValues
    }