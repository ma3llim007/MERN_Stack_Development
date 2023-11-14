// Unique Elements

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

const Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]
var unique = Array.filter(onlyUnique);
console.log(unique);