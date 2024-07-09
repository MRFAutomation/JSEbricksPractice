function removeDuplicatesReturnUniqueElements(array) {
    let uniqueElements = [...new Set(array)];
    return uniqueElements;
}

let array1 = [1, 1, 2];
console.log(removeDuplicatesReturnUniqueElements(array1));

let array2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicatesReturnUniqueElements(array2));


let array3 = [0, 1, 2, 3, 4, '_', '_', '_', '_', '_'];
console.log(removeDuplicatesReturnUniqueElements(array3));