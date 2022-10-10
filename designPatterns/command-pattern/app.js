// class Calculator {
//     constructor() {
//         this.value = 0;
//     }

//     add(valueToAdd) {
//         this.value = this.value + valueToAdd;
//     }

//     subtract(valueToSubtract) {
//         this.value = this.value - valueToSubtract;
//     }

//     multiply(valueToMultiply) {
//         this.value = this.value * valueToMultiply;
//     }

//     divide(valueToDivide) {
//         this.value = this.value / valueToDivide;
//     }
// }

// const calculator = new Calculator();
// calculator.add(10);
// console.log(calculator.value);
// calculator.divide(2);
// console.log(calculator.value);

// ------------------- Command pattern ---------------------- 

class Calculator {
    constructor() {
        this.value = 0;
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd;        
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd;
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract;
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract;        
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract;
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply;
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply;        
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply;
    }
}

const addCommand = new AddCommand(1);
const newAddValue = 5; // addCommand.execute(5);

console.log(`Suma de: ${addCommand.valueToAdd} + ${newAddValue} = ${addCommand.execute(newAddValue)}`);
console.log(`Undo pentru operatia addCommand va fi: ${addCommand.execute(newAddValue)} - ${addCommand.valueToAdd} = ${newAddValue}`);

const subtractCommand = new SubtractCommand(1);
const newSubtractValue = subtractCommand.execute(5);

console.log(`Subtract -> ${newSubtractValue}`);
console.log(`Undo subtract -> ${subtractCommand.undo(newSubtractValue)}`);

const multiplyCommand = new MultiplyCommand(2);
const newMultiplyValue = multiplyCommand.execute(10);

console.log(newMultiplyValue);
console.log(multiplyCommand.undo(newMultiplyValue));