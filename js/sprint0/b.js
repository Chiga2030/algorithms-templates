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

function zip(first, second, n) {
    // Ваше решение
    const length = n * 2;
    const result = new Array(length);
    let current = first;

for (let i = 0; i < length; ++i) {
        result[i] = current.shift();

        if (current === first) {
            current = second;
        } else {
            current = first;
        }
    }

    return result;
}

function solve() {
    const n = readInt();
    const first = readArray();
    const second = readArray();
    process.stdout.write(`${zip(first, second, n).join(' ')}`);
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
