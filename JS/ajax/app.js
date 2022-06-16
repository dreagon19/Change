function req() {
    
    let allData = [
      {
        name: "morpheus1",
        job: "leader",
      },
      {
        name: "morpheus2",
        job: "leader",
      },
      {
        name: "morpheus3",
        job: "leader",
      },
    ];
    allData.forEach((e) => {
        makeReq(e);
    });
}




function makeReq(data) {
    const xhttp = new XMLHttpRequest();

    // xhttp.open("GET", "https://reqres.in/api/users", true);


    xhttp.open("GET", "http://localhost:3000/get", true);
    // xhttp.open("PUT", "https://reqres.in/api/users/2", true);
    
    let val = JSON.stringify(data);
    xhttp.setRequestHeader("Content-type", "application/json");
    
    xhttp.onload = function () {
          console.log(this.responseText);
        if (this.status == 200) {
          console.log(this.responseText);
          console.log("posted");
        }

    }
    xhttp.send();

}