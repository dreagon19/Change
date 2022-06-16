let count = 0;

function getColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";
 
    for (let i = 0; i < 6; i++){
        let r = Math.floor(Math.random() *16);
        // console.log(r);
        color += characters[r];
        
    }
    // console.log(` --->  ${color}`);
    return color;
}

//? Increase count when clicked

document.getElementById("btn-click").addEventListener("click", () => {
    count++;
    document.getElementById("count").innerHTML = count;
})

//? change background using random generated hex

document.getElementById("bg").addEventListener("click", () => {
    let color = getColor();
    document.getElementById("bg-text").innerHTML = color;
    console.log(color);
    document.body.style.backgroundColor = color;
})


//? Reset background and count to original value

document.getElementById("btn-reset").addEventListener("click", () => {
    count = 0;
    document.getElementById("count").innerHTML = count;
    document.body.style.backgroundColor = "#82DBD8"
})