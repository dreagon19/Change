const btn = document.getElementById("btn").addEventListener("click",change);


function change() {
    const colors = ["#947EC3", "#73777B", "#CCF3EE", "#F9F3EE", "#F9CEEE", "#FF8D29", "#FF4949", "#82954B", "#BABD42"];

    document.getElementById("full").style.backgroundColor = colors[Math.floor(Math.random() * 10)];
}


