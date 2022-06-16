$(function () {
  // *------------- Clear Element --------------*/
  $("#tableData").empty();
  // *------------- Creating Table Heading--------------*/

 

  function createTH(col, data) {
    $("#tableData").append(
      `<tr id = "heading" class="hover" class="col"></tr>`
    );
    for (let i = 0; i < col; i++) {
      let keys = Object.keys(data[i]);
      $("#heading").append(`<th>${keys[i]}</th>`);
    }
  }
  // *------------- Creating Table data --------------*/


  function createTD(col, row, data) {
    for (let i = 0; i < row; i++) {
      let tr = $("<tr>");
      tr.addClass("hover");

      $("#tableData").append(tr);
      for (let j = 0; j < col; j++) {
        let value = Object.values(data[i]);
        tr.append(`<td class="tableValue">${value[j]}</td>`);
      }
      tr.append(
        `<span> <i class="fa-solid fa-pencil"></i></span> <span> <i class="fa-solid fa-xmark"></i></span>`
      );
    }
  }

  // *------------- Add --------------*/


  function newItemButton(data) {
      $("#newItem").click(function () {
        $("#inputNew").show();
        let values = addNew(data);

      });
  }

  function addNew(data) {
    let col = Object.keys(data[0]).length;
    let ip = "";
    let keys = [];
    for (let i = 0; i < col; i++) {
      keys = Object.keys(data[i]);
      ip += `<input type="text" name="inputVal" placeholder="Enter Values ${keys[i]}">   
        `;
    }
    ip += `<button id="acceptText" class = "btn btn-primary"> Submit</button>`;

    $("#inputNew").html(ip);
    let values = [];

    $("#acceptText").click(function () {
      let temp = $("[name='inputVal']");
      for (let i = 0; i < col; i++) {
        //   values.push(temp[i].value);
        values[keys[i]] = temp[i].value;
      }
      console.log(values);
      if(values==null) console.log("NULLLLL");
      $("#inputNew").hide();
    });

    return values;
  }

  // *------------- Create Table --------------*/
  function createTable(data) {
    let rowLen = data.length;
    let colLen = Object.keys(data[0]).length;
    // console.log(colLen);
    createTH(colLen, data);
    createTD(colLen, rowLen, data);
  }

  function addToLocal(data) {
    localStorage.setItem("values", JSON.stringify(data));
    let stringData = localStorage.getItem("values");
    let loacalData = JSON.parse(stringData);

    return loacalData;
  }






  // Main get function
  let url = "";
  let loacalData;
  if (localStorage.getItem("values") === null) {
    url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
    $.get(url, function (data, status) {
      console.table(data);

      loacalData = addToLocal(data);

    });
  } else {
    loacalData = JSON.parse(localStorage.getItem("values"));
  }

  // *------------- Creating table form local data --------------*/
  createTable(loacalData);
  newItemButton(loacalData);




});



