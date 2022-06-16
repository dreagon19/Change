document.getElementById("btn").addEventListener('click', loadText);

function loadText() {
    //creates xhr object
    let xhr = new XMLHttpRequest();

    // OPEN - type,url/file ,async
    xhr.open('GET', 'text.txt', true);

    xhr.onprogress = function () {
        document.getElementById("loading").style.display = "block";
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 3000);
    }


    xhr.onload = function () {

        setTimeout(() => {
            if (xhr.status == 200) {
                document.getElementById("text").innerHTML = xhr.responseText;
            }
        }, 3000);

        
    }




    xhr.onerror = function () {
        console.log("Request Error");
    }

    //sends request
    xhr.send();
}

