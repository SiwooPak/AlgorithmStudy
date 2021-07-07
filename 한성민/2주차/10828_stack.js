const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();

class Stack {
    constructor() {
        this.stack = [];
        this.index = 0;
    }

    push(arg) {
        if (arg === undefined) {
            return false;
        }
        this.stack[this.index++] = arg;
    }

    pop() {
        if (this.index <= 0) {
            return -1;
        }
        const result = this.stack[--this.index];
        return result;
    }

    size() {
        return this.index;
    }

    empty() {
        return (this.index) ? 0 : 1;
    }

    top() {
        if (this.index <= 0) {
            return -1;
        }
        const result = this.stack[this.index - 1];
        return result;
    }
}

const stack = new Stack();

const anwser = input.reduce((acc,current) => {
    if (current.includes("push")) {
        const arg = current.split(' ')[1];
        console.log(`arg: ${arg}`)
        stack.push(arg);
    } else if (current.includes("pop")) {
        acc += stack.pop() + "\n";
    } else if (current.includes("size")) {
        acc += stack.size() + "\n";
    } else if (current.includes("empty")) {
        acc += stack.empty() + "\n";
    } else if (current.includes("top")) {
        acc += stack.top() + "\n";
    }
    return acc;
}, "");

console.log(anwser);
