const btn = document.getElementById("btn");

btn.addEventListener('click', loadUser);

function loadUser() {
    let xhr = new XMLHttpRequest();

    //openeing the json file
    xhr.open('GET', 'users.json', true);

    //Onload funtion
    xhr.onload = function () {
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);

            let output = "";
            
            for (let i in user) {
                 output += `<ul>
                <li> ${user[i].id} </li>
                <li> ${user[i].name} </li>
                <li> ${user[i].type} </li>
            </ul>`
                
               document.getElementById('user').innerHTML = output;
            }
            




        }
    }

    xhr.send();

}


