/*프롬포트 창을 곁들인 계산기*/
const calculator = {
    add: function plus(a, b){
        console.log(a + b);
    },
    minus: function minus(a, b){
        console.log(a - b);
    },
    multiply: function multiply(a, b){
        console.log(a * b);
    },
    divide: function divide(a, b){
        console.log(a / b);
    },
    power: function power(a, b){
        console.log(a ** b);
    }
}

let a = parseInt(prompt("input a"));
if(isNaN(a)){
    console.log("error");
    a = parseInt(prompt("input a"));
}
let b = parseInt(prompt("input b"));
if(isNaN(b)){
    console.log("error");
    b = parseInt(prompt("input a"));
}
let sign = prompt("input sign");


if(!isNaN(a) && !isNaN(b)){
    if(sign == '+'){
        calculator.add(a, b);
    }else if(sign === '-'){
        calculator.minus(a, b);
    }else if(sign === '*'){
        calculator.multiply(a, b);
    }else if(sign === '/'){
        calculator.divide(a, b);
    }else if(sign === '^'){
        calculator.power(a, b);
    }else{
        confirm("뭘 친거노?");
    }
}
