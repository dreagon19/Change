/**
 * TODO 1: Change to string literals
 *
 */
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const allClear = document.getElementById("allClear");
const equal = document.getElementById("equal");
const lastDelete = document.getElementById("lastDelete");

const inputD = document.getElementById("inputD");
const outputD = document.getElementById("outputD");

const decimal = document.getElementById("decimal");

//imp variable
let lastOperator = "";
let result = null;
let num1 = "";
let num2 = "";
let isDecimal = false;

//numbers

decimal.addEventListener("click", () => {
  if (!isDecimal) num2 += ".";
  outputD.innerText = num2;
  isDecimal = true;
});

number.forEach((num) => {
  num.addEventListener("click", (element) => {
    num2 += element.target.innerText;
    outputD.innerText = num2;
    console.log("num2:" + num2);
  });
});

operator.forEach((op) => {
  op.addEventListener("click", (element) => {
    pressedOperator(element, "");
  });
});

// *-------------------- Main Logic Starts --------------------*/

function pressedOperator(element, opName) {
  if (!num2) return;

  if (!opName && element) opName = element.target.innerText;

  console.log(opName);

  if (num1 && num2 && lastOperator) {
    mathOperation();
  } else {
    result = num2;
  }
  seprateVar(opName);

  //display 0 as soon as operator is detected
  outputD.innerText = "0";
  lastOperator = opName;
  // console.log("result "+result);

  //setting the value of decimal to false
  isDecimal = false;
}

function seprateVar(x = "") {
  num1 += num2 + " " + x + " "; //todo1

  // num1+=`${num2} ${x} `

  //i display to input box
  console.log(" sp num1: " + num1);
  inputD.innerText = num1;

  // console.log("num1 " + num1);
  //i input box = ""
  num2 = "";
  console.log("sp r:" + result);
}

//math operation
function mathOperation() {
  if (lastOperator === "%") {
    result = parseFloat(result) % parseFloat(num2);
  } else if (lastOperator === "+") {
    result = parseFloat(result) + parseFloat(num2);
  } else if (lastOperator === "-") {
    result = parseFloat(result) - parseFloat(num2);
  } else if (lastOperator === "x") {
    result = parseFloat(result) * parseFloat(num2);
  } else if (lastOperator === "/")
    result = parseFloat(result) / parseFloat(num2);
}

//equal

function equalPressed() {
  if (!num1 || !num2) return;
  mathOperation();
  seprateVar();
  outputD.innerText = result;
  num2 = result;
  num1 = "";
}

// *-------------------- Main Logic Ends --------------------*/

equal.addEventListener("click", () => {
  equalPressed();
});

//clear

function allCls() {
  num1 = "";
  num2 = "";
  inputD.innerText = "";
  outputD.innerText = "0";
  result = "";
  isDecimal = false;
  lastOperator = "";
}

allClear.addEventListener("click", () => {
  // alert("Clicked");
  allCls();
});

//last delete

function lastDel() {
  let temp1 = num2;

  temp1 = temp1.slice(0, -1);
  num2 = temp1;

  if (num2 == "") num2 = "0";

  outputD.innerText = num2;
  console.log(num2);

  // console.log(num2);
}

lastDelete.addEventListener("click", () => {
  lastDel();
});

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key >= 0 && e.key <= 9 && e.key != " ") {
    num2 += e.key;
    outputD.innerText = num2;
    // console.log(e.key);
  } else if (e.key == "+") pressedOperator(null, "+");
  else if (e.key == "-") pressedOperator(null, "-");
  else if (e.key == "*") pressedOperator(null, "*");
  else if (e.key == "/") pressedOperator(null, "/");
  else if (e.key == "%") pressedOperator(null, "%");
  else if (e.code == "NumpadEnter" || e.code == "Enter" || e.code == "Space") {
    equal.focus();
    equal.click();
    e.preventDefault();
  }
  else if (e.key == "Backspace")
    lastDel();
});
