// 'use strict';




// *------------------------------------------- Strict example ------------------------------------------------*/

// let variable = "something";
// go = "again something";
// console.log(variable);
// console.log(variabl);



// *------------------------------------------- nested function ------------------------------------------------*/


// function plus() {
//     function add(a,b) {
//         return a + b;
//     }
//     return add;
// }

// console.log(plus()(12,3));

// *-------------------------------------------  Set ------------------------------------------------*/


// const arr = [];
// for (let i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random() * 10));
// }

// console.log("Array Elements: " + arr.join(" "));

// const st = new Set(arr);

// console.log(typeof (st));

// let val = "";

// for (const it of st) {
//     val += it+" ";
// }
// console.log(val);


// *------------------------------------------- try and catch block ------------------------------------------------*/
// let x = "";

// try {
//     if (x=="") {
//         throw "is empty";
//     }
//     if (x > 25) {
//         throw "fail";
//     }
//     if (x < 25)
//         throw "pass";
// } catch (error) {
//     console.log(error);
// }

// *------------------------------------------- Arrow Function ------------------------------------------------*/

// let add = () => (a, b) => {

//     let sum = a + b;

//     return sum;
// }


// console.log(add()(1,2));

// //? pratice
//1.
//  const greet = () => {
//     return 'something to return';
// }
//2
// const bill = (products, tax) => {

//     // do something
//     return 'something';
// }



// *------------------------------------------- Self Invoking function ------------------------------------------------*/
//? Self invoking function calls themselves or invoke themselves without being called or invoked.

// const x = (function () {
//     console.log("Self Invoked");
//     return "Called";
// })();

// console.log(x); //? Outputs: "Called"

// *------------------------------------------- Invoking a fn as methods------------------------------------------------*/
// const water = {
//     formula: "H2O",
//     scientificName: "Hydrogen monoxide",

//     details:function() {
//         return this.formula+ " "+this.scientificName;
//     }

// }
// console.log(water.details());

// *------------------------------------------- Callback Function ------------------------------------------------*/


// const callback = (aFunction) => {
//     let val = 30;
//     aFunction(30);
// }

// callback((val) => {
//     console.log(val+10);
// })

// *------------------------------------------- forEach Method ------------------------------------------------*/

//? A method which iterates over an array , most like a loop using a callback function

// let names = ['a', 'b', 'c', 'f'];

// names.forEach((e, i) => {
//     console.log(e +" "+i);
// })

// *------------------------------------------- Objects ------------------------------------------------*/

// const mouse = {
//     name: "Redgear",
//     type: "Gaming",
//     price: 1000
// }
// // console.log(mouse["name"]);

// for (let x in mouse) {
//     console.log(mouse[x]);
// }

// *------------------------------------------- Adding methods to objects ------------------------------------------------*/



// const mouse = {
//     name: "Redgear",
//     type: "Gaming",
//     price: 1000,
//     dpi: (val) => {
//         if (val == 1)
//             return 400;
//         if (val == 2) {
//             return 800;
//         }
//         if (val == 3)
//             return 1200;
//     }

// }


// let i = 0;

// function count() {
//     i++;
//     if (i > 3)
//         i = 1;
//     document.getElementById("clicked").innerHTML = mouse.dpi(i);


// }

// *------------------------------------------- Object.value() ------------------------------------------------*/
// const mouse = {
//     name: "Redgear",
//     type: "Gaming",
//     price: 1000,
//     dpi: (val) => {
//         if (val == 1)
//             return 400;
//         if (val == 2) {
//             return 800;
//         }
//         if (val == 3)
//             return 1200;
//     }

// }
// const arr = Object.values(mouse);
// console.log(arr);

// const bottle = {
//     name: "H2O",
//     brand: "Cello",
//     uses: [{ title: "this bottle is black color" }, { title: "it has normal water now" }, { title:"it has cold water now"}],

//     logUse() {
//         console.log("Uses are:");
//         this.uses.forEach(use => {
//             console.log(use.title);
//         })

//     }
// };

// bottle.logUse();

// *------------------------------------------- Math Objects ------------------------------------------------*/
// console.log(Math);

// *------------------------------------------- Object reference ------------------------------------------------*/

// let x = 10;
// let y = x;

// console.log("x= " + x);
// console.log("y= " + y);

// x = 11;
// console.log("x= " + x);
// console.log("y= " + y);


// const obj1 = {
//     name: "something",
//     day: "Today"
// }


// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2);

// obj2.name = "nothing";

// console.log(obj1);
// console.log(obj2);


// *------------------------------------------- Object constructor ------------------------------------------------*/

// function bottle(size,color,brand) {
//     this.size = size;
//     this.color = color;
//     this.brand = brand;
// }

// const b1 = new bottle("one litre", "black", "cello");

// console.log(b1);

// *-------------------- Maps --------------------*/
// const nmap = new Map([
//     [1, "Hello"],
//     [2, "Hello"],
//     [3, "Hello"]
// ])

// for (let x of nmap) {
//     //console.log(x.constructor);
//     console.log(`x[0] = ${x[0]} || x[1] = ${x[1]}`);
// }




