// class Bottle{

//     constructor(color,brand) {
//         this.color = color;
//         this.brand = brand;
//     }

//     printColor(a) {
//         return (`${this.color} ----> ${a}`);
//     }

// }

// class BigBottle extends Bottle{

//     constructor(color) {
//         super();
//         this.colors = color;
//     }

//     show();
// }


// let BigBottle = new Bottle("blue");

// *-------------------- Inheritance Example with static function --------------------*/

// class Phone{
//     constructor(name, brand, ram, cpu) {
//         this.name = name;
//         this.brand = brand;
//         this.ram = ram;
//         this.cpu = cpu;
//     }

//     static turnOn() {
//         return `${this.name} is turned on`;
//     }
//     specs() {
//         return `Ram is ${this.ram} and cpu is ${this.cpu}`;
//     }

// }




// class Oneplus extends Phone{
//     constructor(name,ram) {
//         super(name)
//         this.ram = ram;
//     }
//     turnOff() {
//         return `${this.name} is turned off with ram ${this.ram}`;
//     }

// }

// const oneplus = new Phone("Nord-2", "OnePlus", "8-GB", "Dimensity-1200");

// const tenPro = new Oneplus("10R", "12-GB");

// console.log(tenPro.turnOn());


// *-------------------- Async Callback --------------------*/


// function show(params) {
//     console.log(params);
// }

// function calc(x,y,callBack) {

//     callBack(x + y);

// }

// calc(1, 2, show);


// *-------------------- Asynchronous Js --------------------*/

//? Function running in parallel with other function are called asynchronous.

//? Best example will be setTimeOut() function

//? Opening  a file

// function show(params) {

// }


// function open(callBack) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "index.html");
//     req.onload = () => {
//         if (req.status == 200) {
//             callBack(this.responseText)
//         } else {
//             callBack("Error: " + req.status);
//         }
//     }
//     req.send();
// }
// open(show);



// *-------------------- JS Promises --------------------*/

// let p = new Promise((resolve, reject) => {
//     let a = 21;
//     if (a % 2 == 0) {
//         resolve('Even');
//     } else {
//         reject('Not even');
//     }
// })

// p.then((message) => {
//     console.log(`This number is ${message}`);
// }).catch((message) => {
//     console.log(`This number is ${message}`);
// })


// const p1 = new Promise((resolve, reject) => {

//     let a = true;
//     if (a) {
//         resolve('a is true');
//     } else {
//         reject('a is false');
//     }

// })
// const p2 = new Promise((resolve, reject) => {

//     let b = true;
//     if (b) {
//         resolve('b is true');
//     } else {
//         reject('b is false');
//     }

// })
// const p3 = new Promise((resolve, reject) => {

//     let c = true;
//     if (c) {
//         resolve('c is true');
//     } else {
//         reject('c is false');
//     }

// })


// Promise.all([
//     p1,p2,p3
// ]).then((messages) => {
//     console.log(messages);
// }).catch((messages) => {
//     console.log(messages);
// })

// *-------------------- Async and await --------------------*/

// const uno = () => {
//     return "I am One";
// };

// const dos = () => {
//      //?Async and await always needs a promise to run or await will have no effect.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { //?Async and await always needs a promise to run or await will have no effect.
//             resolve("I am Two");
//         }, 3000);
//     })
// };


// const tres = () => {
//     return "I am three";
// }


// const calling = async () => {
//     let one = uno();
//     console.log(one);

//     let two = await dos();
//     console.log(two);

//     let three = tres();
//     console.log(three);

// }


// calling();

