const generate = document.getElementById("generate");
const display = document.getElementById("display");
const submitText = document.getElementById("submitText");
const colHeading = document.getElementById("colHeading");

const inputDisplay = document.getElementById("inputDisplay");
let err = document.getElementById("err");

let rowCount = document.getElementById("nRow");
let colCount = document.getElementById("nCol");
const headerr = document.getElementById("headErr");




function randomNum() {
    return Math.floor(Math.random() * 100);
}


function takeInput() {
  let heading = colHeading.value;
//   console.log(heading);
  return heading;
}


function createInput(row,col) {
    let ip = "";
    for (let i = 0; i < col; i++){
        ip += `<input type="text" name="arr" class="inputFields" placeholder="Enter Heading ${
          i + 1
        }">   
        `;
    }
    ip += `<button id="acceptText"> Submit</button>`;
    inputDisplay.innerHTML = ip;
}

function headData() {

    let fields = document.getElementsByName('arr');
    // console.log(fields[0].value);
    


    //Todo:returns a nodelist convert it into array;
    return fields;


}


function createTable() {
  let rowCount = document.getElementById("nRow").value;
  let colCount = document.getElementById("nCol").value;
//   console.log(`${rowCount} ${colCount}`);

    
    
    
  let table = document.createElement("table");
  let row = document.createElement("tr");
  table.appendChild(row);


    //? headdata
    let data = headData();
    
  for (let i = 0; i < colCount; i++) {
    let th = document.createElement("th");
    row.appendChild(th);
    th.innerHTML = data[i].value;
  }

  for (let i = 0; i < rowCount; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let j = 0; j < colCount; j++) {
      var td = document.createElement("td");
      row.appendChild(td);
      td.innerHTML = randomNum();
    }
  }
  return table;
}

//this function removes any html at the start and then apply a new html table each time.
generate.addEventListener("click", () => {

    let rowCount = document.getElementById("nRow").value;
    let colCount = document.getElementById("nCol").value;
    // console.log(`${rowCount} ${colCount}`);

    if (!validateNum(rowCount, colCount)) {
        return;
    }

    createInput(rowCount, colCount)


    const acceptText = document.getElementById("acceptText");

    acceptText.addEventListener('click',() => {
        
        if (!validateHead()) {

            //set table display to none
            display.style.display="none"

            headerr.innerHTML = `Duplicates and Empty Heading not allowed.`;
            headerr.style.color = "red";
            return;
        }
        else {
            display.style.display = "block";
            headerr.innerHTML = null;
        }

        //todo
        let table = createTable();
        display.innerHTML = ""; //reset the inner html
        // console.log(table);
        display.appendChild(table);
    })
    
});

function validateNum(row, col) {

    if (row <= 0 || row >= 11) {
        rowCount.style.border = "2px solid red";

        err.innerHTML = `Input should be between 1-10`;

        return false;
    } else {
        rowCount.style.border = null;
        err.innerHTML = null;
    }

    if (col <= 0 || col >= 11) {
        colCount.style.border = "2px solid red";
        err.innerHTML = `Input should be between 1-10`;
        return false;
    } else {
        colCount.style.border = null;
        err.innerHTML = null;
    }

    return true;
}

function validateHead() {
   
    let original = headData();
    
    console.log(original.length);

    let data=[];

    for (let i = 0; i < original.length; i++){
        data.push(original[i].value);
    }

    let newData = Array.from(new Set(data));
    
    console.log(newData);


    if (original.length != newData.length) {
       return false;
    }

    return true;

    
}


