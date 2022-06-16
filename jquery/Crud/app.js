$(function () {
  // *------------- Fetching Local storage --------------*/
  updateList();
  function updateList() {
    let localData = JSON.parse(localStorage.getItem("data"));
    if (localData == null) {
      localStorage.setItem("data", JSON.stringify(["Added"]));
    }

    for (let i = 0; i < localData.length; i++) {
      let div = $(`<div class="display-text"></div>`);
      div.append(`<p>${localData[i]}</p>`);
      div.append(`<div>
        <i class="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>`);
      $("#display").append(div);
    }
  }

  function getLocalData() {
    let localData = JSON.parse(localStorage.getItem("data"));
    return localData;
  }

  function addToLocal(data) {
    localStorage.setItem("data", JSON.stringify(data));
    let localData = JSON.parse(localStorage.getItem("data"));

    return localData;
  }

  // *------------- Add --------------*/
  $("#bigModal").click(function () {
    $("#formID").trigger("reset");
    $("#editBtn").hide();
    $("#addBtn").show();
  });

  $("#addBtn").click(function () {
    let div = $(`<div class="display-text"></div>`);

    let localData = getLocalData();
    let inputValue = $("#inputText").val();

    div.append(`<p>${inputValue}</p>`);
    div.append(`<div>
        <i class="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>`);
    $("#display").append(div);

    localData.push(inputValue);
    addToLocal(localData);
  });

  // *------------- Delete --------------*/
  $("i")
    .filter(".fa-xmark")
    .click(function () {
      console.log("clicked");
      let parentDiv = $($(this).parent()[0]).parent()[0];
      let p = $($(this).parent()[0]).siblings()[0];
      let text = $(p).text();
      console.log(text);

      let localData = getLocalData();
      let index = localData.indexOf(text);

      parentDiv.remove();
      localData.splice(index, 1);
      addToLocal(localData);
    });

  $(".fa-pen").click(function () {
    // *------------- Hiding the add New btn and showing the edit btn --------------*/
    $("#editBtn").show();
    $("#addBtn").hide();

    console.log("clicked edit");
    let parentDiv = $($(this).parent()[0]).parent()[0];
    let p = $($(this).parent()[0]).siblings()[0];
    let text = $(p).text();
    let localData = getLocalData();
    let index = localData.indexOf(text);

    console.log(index);

    $("#inputText").val(localData[index]);

    $("#editBtn").click(function () {
      let updateText = $("#inputText").val();
      $(p).text(updateText);
      console.log(updateText);
      localData[index] = updateText;
      addToLocal(localData);
    });
  });
});
