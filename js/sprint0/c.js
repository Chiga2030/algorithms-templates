const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function movingAverage(array, windowSize) {
    // Ваше решение
    const length = array.length - windowSize;
    const result = new Array(length);
    let currentAvg = 0;

    for (let i = 0; i < windowSize; ++i) {
        currentAvg += array[i];
    }

    for (let i = 0; i <= length; ++i) {
        result[i] = currentAvg / windowSize;

        currentAvg -= array[i];
        currentAvg += array[windowSize + i];
    }

    return result;
}

function solve() {
    const n = readInt();
    const arr = readArray();
    const windowSize = readInt();
    process.stdout.write(`${movingAverage(arr, windowSize).join(' ')}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}
