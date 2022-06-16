let postObj = {
    id: 1,
    name: "Cup",
    type:"Cup"
}

let post = JSON.stringify(postObj);

document.getElementById('btn').addEventListener('click', createPost);

function createPost() {
    let xhr = new XMLHttpRequest();

    //open
    xhr.open('POST', 'users.json');
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(post);

    // xhr.onload = function () {
    //     if (this.status == 200) {
    //         console.log("Done");
    //     }
    // }
}


