setInterval(() => {
    const d = new Date();
    document.getElementById("hours").innerHTML = d.getHours();
    document.getElementById("minutes").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds();
}, 1000);








