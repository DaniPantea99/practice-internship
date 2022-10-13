const input = document.querySelector('.input');
const stiva = document.querySelector('.stiva');

const prio0 = [ '(', ')' ];
const prio1 = [ '*', '/' ];
const prio2 = [ '+', '-' ]
let st = [];
let fp = [];

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputValue = input.value;
        const newPar = document.createElement('p');
        newPar.textContent = inputValue;
        stiva.append(newPar);
        input.value = "";
    }
})


// function checkInput() {
//     const inputValue = input.value;
//     if(inputValue)
// }


const operators = ['+', '-', '*', '/'];
let arr = [2, 3, 3, '-', '*', 30, 6, 4, 1, '*', '+', '/', 6, '-', '+'];


function Calcul(array) {
    let result = '';
    let i = 0;
    while(!operators.includes(array[i])) {
        i++
    }
    switch(array[i]){
        case '+':
            result = array[i-2] + array[i-1];
            break;
        case '-':
            result = array[i-2] - array[i-1];
            break;
        case '*':
            result = array[i-2] * array[i-1];
            break;
        case '/':
            result = array[i-2] / array[i-1];
            break;
    }
    array[i-2] = result;
    array.splice(i-1, 2);
    if(array.length === 1){
        return array[0];
    }

    return Calcul(array);
}
console.log(Calcul(arr));