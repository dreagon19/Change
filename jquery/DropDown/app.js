const API_KEY =
  "1mLIdxk0Rn2y3BrvOLttJx8e3t8CC9jl6jS4UQfPYyrtM-436yTUhnzj1Whm9PoTCcw";

$(function () {
  function callAPI() {
    $.ajax({
      type: "get",
      url: "https://www.universal-tutorial.com/api/getaccesstoken",
      success: function (data) {
        console.log(data);
        let auth_token = data.auth_token;
        getCountry(auth_token);
      },
      error: function (error) {
        console.log(error);
      },
      headers: {
        Accept: "application/json",
        "api-token":
          "1mLIdxk0Rn2y3BrvOLttJx8e3t8CC9jl6jS4UQfPYyrtM-436yTUhnzj1Whm9PoTCcw",
        "user-email": "jiteshk.aspirefox@gmail.com",
      },
    });
  }
  function getCountry(auth_token) {
    $.ajax({
      type: "GET",
      url: "https://www.universal-tutorial.com/api/countries/",
      success: function (data) {
        //Adding option
        addCountry(data);
        getState(auth_token);
      },
      error: function (error) {
        console.log(error);
      },
      headers: {
        Authorization: "Bearer " + auth_token,
        Accept: "application/json",
      },
    });
  }

  function getState(auth_token) {
    $("#country").change(function () {
      let countryName = $("#country").val();
      console.log(countryName);
      $.ajax({
        type: "GET",
        url: "https://www.universal-tutorial.com/api/states/" + countryName,
        success: function (data) {
          //Adding option
          addState(data);
          getCity(auth_token);
        },
        error: function (error) {
          console.log(error);
        },
        headers: {
          Authorization: "Bearer " + auth_token,
          Accept: "application/json",
        },
      });
    });
  }
  function getCity(auth_token) {
    $("#state").change(function () {
      let stateName = $("#state").val();
      console.log(stateName);
      $.ajax({
        type: "GET",
        url: "https://www.universal-tutorial.com/api/cities/" + stateName,
        success: function (data) {
          //Adding option
          addCity(data);
        },
        error: function (error) {
          console.log(error);
        },
        headers: {
          Authorization: "Bearer " + auth_token,
          Accept: "application/json",
        },
      });
    });
  }

  callAPI();

  // *------------- Functions --------------*/
  function addCountry(data) {
    data.forEach((e) => {
      $("#country").append(
        `<option value="${e.country_name}">${e.country_name}</option>`
      );
    });
  }
  function addState(data) {
    $("#state").html("");
    data.forEach((e) => {
      $("#state").append(
        `<option value="${e.state_name}">${e.state_name}</option>`
      );
    });
  }
  function addCity(data) {
    $("#city").html("");
    data.forEach((e) => {
      $("#city").append(
        `<option value="${e.city_name}">${e.city_name}</option>`
      );
    });
  }
  // *------------- Functions ends --------------*/
});
