$(function () {
    // $(".box").width().height("5vh")
    $(".box").click(() => {
    
    let str =
      "The width = " +
      $(".box").width() +
      " and Breadth = " +
      $(".box").height();

    console.log(str);
    $(".test").text(str);
    
    console.log($("div").children());
    


  });
});
