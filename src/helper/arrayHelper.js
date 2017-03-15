'use strict'

export function hasSameValuesBetween(array1, array2) {
	return sortArray(array1) === sortArray(array2);
}

function sortArray(array) {
    return array.sort().join(',');
}