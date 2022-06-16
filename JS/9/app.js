
function convertObject(email,pass) {
    const obj = {
        email: email,
        password:pass
    }
    return obj;
}

function toLocal(obj) {
    let key = obj.email;
    const obj1 = JSON.stringify(obj);
    localStorage.setItem(key,obj1);
}


function getValues() {
    let email = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value

    const obj = convertObject(email, pass);

    toLocal(obj);
}

