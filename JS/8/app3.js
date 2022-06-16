document.getElementById("button").addEventListener('click', loadUsers);

//load users
function loadUsers() {
    const xhr = new XMLHttpRequest();

    //open 
    xhr.open('GET', 'https://api.github.com/users', true);


    //onload Function
    xhr.onload = function () {
        if (this.status == 200) {
            const users = JSON.parse(this.responseText);
            let output = "";
            console.log(users);
            for (let i in users) {
                output += `
                <div class="row">
                  <div class="col">
                     <img src="${users[i].avatar_url}">
                  </div>
                  <div class="col">
                    <p> Id: ${users[i].id}</p>
                    <p> Login: ${users[i].login}</p>
                    <p> ${users[i].html_url}</p>
                  </div> 
                </div>
                `
            }
            document.getElementById("parent").innerHTML = output;
        }
    }

    xhr.send();

}



