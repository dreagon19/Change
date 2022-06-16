$(function () {

    

    let temp1 = $.get("https://fakestoreapi.com/products", function (data, status) {
        console.log(status);
        console.log(data);
    });
    let temp = $.post(
      "https://fakestoreapi.com/products",
      { id: 121, name: "jk" },
      function (data, status) {
        console.log(status);
        console.log(data);
      }
    );
});
