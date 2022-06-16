$(function () {
  // *------------- Creating Table Heading--------------*/

  function getKeys(data) {
    let keys;
    let col = Object.keys(data[0]).length;
    for (let i = 0; i < col; i++) {
      keys = Object.keys(data[0]);
    }

    return keys;
  }

  function getAge(date) {
    let d = new Date();
    let d1 = new Date(date);

    let age = "";

    let curr = d.getFullYear();
    let dob = d1.getFullYear();
    if (curr - dob < 1) {
      if (d.getMonth() - d1.getMonth() < 1) {
        age += `${d.getDate() - d1.getDate()} days`;
      } else {
        age += `${d.getMonth() - d1.getMonth()} months`;
      }
    } else {
      age += `${curr - dob}`;
    }
    return age;
  }

  function createTH(col, data) {
    $("#thead").append(`<tr id = "heading" class="hover" ></tr>`);

    let keys = Object.keys(data[0]);

    for (let i = 0; i < col; i++) {
      let keys = Object.keys(data[0]);
      if (keys[i] == "id") {
        $("#heading").append(`<th class="hideThis">${keys[i]}</th>`);
      } else {
        $("#heading").append(`<th>${keys[i]}</th>`);
      }
    }
    $("#heading").append(`<th>Edit/Delete</th>`);
  }
  // *------------- Creating Table data --------------*/

  function createTD(col, row, data) {
    for (let i = 0; i < row; i++) {
      let tr = $("<tr>");
      tr.addClass("hover");

      let keys = Object.keys(data[i]);

      $("#tbody").append(tr);
      for (let j = 0; j < col; j++) {
        let value = Object.values(data[i]);

        if (keys[j] == "imageUrl") {
          tr.append(
            `<td class=""><img src="${value[j]}" alt="No Image" height = 120 width=120></td>`
          );
        } else if (keys[j] == "id") {
          tr.append(`<td class="hideThis">${value[j]}</td>`);
        } else {
          tr.append(`<td class="">${value[j]}</td>`);
        }
      }
      tr.append(
        `<td class = "icons"><span> <i class="fa-solid fa-pencil" data-bs-target="#exampleModal" data-bs-toggle="modal" id="editbtn${i}"></i></span> <span> <i class="fa-solid fa-xmark" id="deletebtn${i}" ></i></span></td>`
      );
    }
  }

  // *------------- Create Table --------------*/
  function createTable(data) {
    let rowLen = data.length;
    let colLen = Object.keys(data[0]).length;

    createTH(colLen, data);
    createTD(colLen, rowLen, data);
  }

  // *------------- Table DATA STARTS --------------*/

  // *------------- Adding New rows --------------*/
  function addRow(table, data) {
    let values = [];
    let keys = getKeys(data);

    let col = Object.keys(data[0]).length;

    let lastId = data[data.length - 1].id;

    $("#bigModal").click(function () {
      $("#inputReceived").show();
      $("#updateReceived").hide();

      $("#formId").trigger("reset");
      $("#formId").removeClass("was-validated");
    });

    $("#inputReceived").click(function () {
      lastId++;
      let temp = $("[name='fields']");

      values[keys[0]] = lastId;

      console.log("temp length " + temp.length);

      console.log(temp);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].value == "" && temp[i].id != "age") {
          return;
        }

        if (temp[i].id == "contactNumber" && temp[i].value.length != 10) {
          return;
        }

        if (temp[i].id == "dob") {
          console.log(temp[i].value);
          let age = getAge(temp[i].value);
          values[keys[i]] = age;
        }

        values[keys[i + 1]] = temp[i].value;
      }

      //converting [] to {}
      let valueObj = Object.assign({}, values);

      // adding to main dataobject
      data.push(valueObj);

      //drawing the row using tabledata
      //getting only the values in the modified object
      let rowData = Object.values(valueObj);

      //uncomment this
      // table.row.add(rowData).draw();

      // console.log(data);

      //pushing to local storage
      addToLocal(data);
    });
  }

  // *------------- Delete Row --------------*/
  function deleteRow() {
    $("i")
      .filter(".fa-xmark")
      .click(function () {
        $("#confirmModal").click();

        let current = this;

        $("#yesDelete").click(function () {
          let id = $(current).attr("id"); //returns the value of id on i tag
          // console.log(`#${id}`);
          let idNo = id[id.length - 1];

          let span = $(`#${id}`).parent();
          let td = span.parent();
          //getting all the sibilings

          // console.log(idValue);

          //remove the tr
          let row = td.parent();
          // console.log(row);

          row.remove();
          deleteFromLocal(idNo);
        });
        // console.log(this);
      });
  }

  // *------------- Edit Rows --------------*/
  function editRows() {
    $("i")
      .filter(".fa-pencil")
      .click(function () {
        $("#inputReceived").hide();
        $("#updateReceived").show();

        let current = this;
        let id = $(this).attr("id");

        let span = $(`#${id}`).parent();

        let td = span.parent();

        let siblings = td.siblings().filter("td");

        let usedValues = [];

        for (let i = 0; i < siblings.length; i++) {
          usedValues.push(siblings[i].innerText);
        }

        // *------------- Puts texts on the field --------------*/
        let temp = $("[name='fields']");

        //FETCHING THE data from the localstorage

        for (let i = 0; i < temp.length; i++) {
          temp[i].value = usedValues[i + 1];
        }

        $("#updateReceived").click(function () {
          let tempVal = $("[name='fields']");
          let updateValue = [];

          updateValue.push(usedValues[0]);
          for (let i = 0; i < siblings.length - 1; i++) {
            console.log(i);
            if (tempVal[i].value == "" && tempVal[i].id != "age") {
              return;
            }

            if (
              tempVal[i].id == "contactNumber" &&
              tempVal[i].value.length != 10
            ) {
              console.log(tempVal[i].value.length);
              return;
            }

            if (tempVal[i].id == "dob") {
              let age = getAge(temp[i].value);
              siblings[i].innerText = age;
              siblings[i + 1].innerText = temp[i].value;

              updateValue[i] = age;

              updateValue.push(temp[i].value);
            } else {
              siblings[i + 1].innerText = tempVal[i].value;
              updateValue.push(tempVal[i].value);
            }
          }
          console.log("Update Value");
          console.log(updateValue);

          let data = JSON.parse(localStorage.getItem("values"));

          let index;
          let keys = getKeys(data);
          let editArr = [];
          editArr[keys[0]] = updateValue[0];

          //searching for the clicked index and matching it with local stroage
          for (let i = 0; i < data.length; i++) {
            if (usedValues[0] == data[i].id) {
              index = i;
            }
          }
          // adding the keys in editArr
          for (let i = 0; i < tempVal.length; i++) {
            editArr[keys[i + 1]] = updateValue[i + 1];
          }

          //converting usedValues into object;
          let editObj = Object.assign({}, editArr);

          data.splice(index, 1, editObj);

          addToLocal(data);
        });
      });
  }

  // *------------- Apply only after the entire table is done --------------*/
  function applyTableData(data) {
    let table = $("#tableData").DataTable({
      defaultContent: "",
      order: [[0, "desc"]],
      destroy: true,
    });
    addRow(table, data);

    deleteRow();

    editRows();
  }

  // *------------- Table DATA ENDS --------------*/

  function addToLocal(data) {
    localStorage.setItem("values", JSON.stringify(data));
    let stringData = localStorage.getItem("values");
    let loacalData = JSON.parse(stringData);
    return loacalData;
  }

  function deleteFromLocal(idNo) {
    let localData = JSON.parse(localStorage.getItem("values"));

    localData.splice(idNo, 1);

    addToLocal(localData);
  }

  // Main get function
  let url = "";
  let loacalData;

  if (localStorage.getItem("values") < 1) {
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
  // getKeys(loacalData);
  applyTableData(loacalData);

  //validation
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
