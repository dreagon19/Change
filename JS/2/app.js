
let count = 0;

document.getElementById("btn").addEventListener("click", () => {
    count++;
    document.getElementById("clicked").innerHTML = count;
    console.log("clicked");
    console.log(count);
});

