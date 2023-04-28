"use strict"
const input1 = document.getElementById("Input1Input");
const input2 = document.getElementById("Input2Input");
const answer = document.getElementById("answerOutput")
const btnadd = document.getElementById("add");
const btnsubtract = document.getElementById("subtract");
const btnmultiply = document.getElementById("multiply");
const btndivide = document.getElementById("divide");


window.onload = init;

function init(){
    btnadd.onclick = onBtnAddClick;
    btnsubtract.onclick = onBtnSubtractClick;
    btnmultiply.onclick = onBtnMultiplyClick;
    btndivide.onclick = onBtnDivideClick;
}

//ADD

function onBtnAddClick(){

    // get the known values
    let input1Value = parseFloat(input1.value);
    let input2Value = parseFloat(input2.value);
    //calculate the unknown values
    let added= parseFloat(input1Value + input2Value);
   
    //display 
    answer.value = added;
}

console.log("added")

//SUBTRACT

function onBtnSubtractClick(){

    let input1Value = parseFloat(input1.value);
    let input2Value = parseFloat(input2.value);

    let subtracted= parseFloat(input1Value - input2Value);
   
    
    answer.value = subtracted;
}

console.log("subtracted")

//MULTIPLY

function onBtnMultiplyClick(){

   
    let input1Value = parseFloat(input1.value);
    let input2Value = parseFloat(input2.value);
    let multiplied= parseFloat(input1Value * input2Value);
   
    answer.value = multiplied;
}

console.log("multiplied")

//DIVIDE

function onBtnDivideClick(){

    
    let input1Value = parseFloat(input1.value);
    let input2Value = parseFloat(input2.value);

    let divided= parseFloat(input1Value / input2Value);
   
    
    answer.value = divided;
}

console.log("divided")