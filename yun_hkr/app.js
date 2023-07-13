// const calculator ={
//     add: function(a,b){
//         console.log(a+b);
//     },
//     minus: function(a,b){
//         console.log(a-b);
//     },
//     multiply: function(a,b){
//         console.log(a*b);
//     },
//     power: function(a,b){
//         console.log(a**b);
//     }
// }
// calculator.add(1,2);
// calculator.minus(5,4);
// calculator.multiply(3,5);
// calculator.power(4,4);


// const a = parseInt("15");
// console.log(typeof a);
// if(!isNaN(a)){
//     console.log("숫자를 입력해주세요");
// }


const title = document.querySelector("div.hello:first-child h1");
// h1을 여러 개 만들어도 제일 위에꺼만 뜸
//console.log(title);

title.style.color = "yellow";

function handleTitleClick(){
    console.log("title was clicked")
    }
 title.addEventListener("click", handleTitleClick);

