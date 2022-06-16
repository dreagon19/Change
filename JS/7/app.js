
// *-------------------- Worker API --------------------*/
//? Worker is used as JavaScript is a single thread language and it freezes up the entire browser if a task which requires heavy computational time is initiated.

//? Workers do that while allowing other UI to be still interactable.


// const btn1 = document.getElementById("btn1").addEventListener("click", () => {
   
//     const worker = new Worker("worker.js");
//     worker.postMessage("do something");

//     worker.onmessage = (e) => {
//         document.getElementById("text1").innerHTML = `worker : ${e.data}`;
//     }

    

// });

// const btn2 = document.getElementById("btn2").addEventListener("click", () => {
//     document.getElementById("text2").innerHTML = "Not worker";
// });

// *-------------------- Fetch API --------------------*/

let file = "fetch.txt"

fetch(file).then(x => x.text()).then((y) => {
    document.getElementById("fetch-text").innerHTML = y;
})



