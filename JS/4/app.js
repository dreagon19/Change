

function validateEmail() {
    let x = document.forms["simpleForm"]["isEmail"].value;
    console.log(x);
    if (x == "") {
        console.log(true);
        return true;
    }
}

document.getElementById("submitBtn").addEventListener("click", () => {
    if (validateEmail() == true) {
        document.getElementById("exampleInputEmail1").placeholder = "Input Email";
    }
    
})