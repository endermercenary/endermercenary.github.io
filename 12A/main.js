

const aField = document.querySelector("#aField");
const bField = document.querySelector("#bField");

const resultBox = document.querySelector("#resultBox");

document.querySelector("#addBtn").addEventListener("click",addFn);
document.querySelector("#subBtn").addEventListener("click",subFn);
document.querySelector("#mulBtn").addEventListener("click",mulFn);
document.querySelector("#divBtn").addEventListener("click",divFn);
document.querySelector("#modBtn").addEventListener("click",modFn);

document.querySelector("#rectBtn").addEventListener("click",rectangleFn);
document.querySelector("#triBtn").addEventListener("click",triangleFn);
document.querySelector("#randBtn").addEventListener("click",randomFn);

function getNumbers(){

    let a=parseFloat(aField.value);
    let b=parseFloat(bField.value);

    return {a,b};

}

function addFn(){

    let {a,b}=getNumbers();

    resultBox.innerHTML=`${a} + ${b} = ${a+b}`;

}

function subFn(){

    let {a,b}=getNumbers();

    resultBox.innerHTML=`${a} - ${b} = ${a-b}`;

}

function mulFn(){

    let {a,b}=getNumbers();

    resultBox.innerHTML=`${a} × ${b} = ${a*b}`;

}

function divFn(){

    let {a,b}=getNumbers();

    if(b==0){

        resultBox.innerHTML="Cannot divide by zero.";
        return;

    }

    resultBox.innerHTML=`${a} ÷ ${b} = ${a/b}`;

}

function modFn(){

    let {a,b}=getNumbers();

    if(b==0){

        resultBox.innerHTML="Cannot modulus by zero.";
        return;

    }

    resultBox.innerHTML=`${a} % ${b} = ${a%b}`;

}

function rectangleFn(){

    let {a,b}=getNumbers();

    let area=a*b;

    resultBox.innerHTML=
    `Rectangle Area = ${area}`;

}

function triangleFn(){

    let {a,b}=getNumbers();

    let area=0.5*a*b;

    resultBox.innerHTML=
    `Triangle Area = ${area}`;

}

function randomFn(){

    let {a,b}=getNumbers();

    let min=Math.min(a,b);
    let max=Math.max(a,b);

    let random=
    Math.floor(Math.random()*(max-min+1))+min;

    resultBox.innerHTML=
    `Random Number (${min}-${max}) = ${random}`;

}