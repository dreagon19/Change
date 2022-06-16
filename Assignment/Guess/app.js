$(function () {
  $("#displayBox").text("Click to generate a random number");

  $("#displayBox").click(function () {
    let p = $("<p></p>");

    $("#displayBox").text("Random number generated. Type your guess below:");

    let random = Math.floor(Math.random() * 10);
    console.log(random);
    let p1 = $("<p></p>");
      $(".btn").click(function () {
        
        let guess = $("#inputField").val();
       
      if (guess == random) {
        p1.text("Good ! You guessed it");
      } else {
        p1.text("try again");
      }
      $("#displayBox").append(p1);
    });
  });
});
