const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let ClampedValue = Math.min(lowerClampedValue, upper);
        return ClampedValue;
    },

    inRange(number, start, end) {
        if (end === undefined) {
            end = start
            start = 0
        }
        if (start > end) {
            let temp = end;
            end = start
            start = temp
        }
        let isInRange = start <= number && number < end
        return isInRange;
    },

    words(string) {
        return string.split(' ');
    },

    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    has(object, key) {
        return object[key] !== undefined ? true : false;
    },

    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject = { originalValue: key }
        }
        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) {
                return key;
            }
        }
        return undefined;
    },

    drop(array, num) {
        if (num === undefined) {
            num = 1
        }
        return array.slice(num, array.length);
    },

    dropWhile(array, predicate) {
        let func = (element, index) => {
            return !predicate(element, index, array)
        }
        let dropNumber = array.findIndex(func);
        return this.drop(array, dropNumber);
    },

    chunk(array, size) {
        if (size === undefined) {
            size = 1
        }
        let newArray = []
        for (let i = 0; i < array.length; i += size) {
            newArray.push(array.slice(i, i + size))
        }
        return newArray;
    }
};



module.exports = _;