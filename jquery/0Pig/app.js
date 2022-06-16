// $(document).ready(function () {

//  // *------------- Hidden Element from start --------------*/

//   $(".d2").hide();
//   $(".d3").hide();
//   $(".d4").hide();

//   // *------------- End --------------*/

//   let count = 1;

//   //1st click
//   $(".bigBox").click(() => {
//     count++;

//     if (count == 2) {
//       $(".d1").hide("slow");
//       $(".d2").show("slow");
//     } else if (count == 3) {
//       $(".d2").hide("slow");
//       $(".d3").show("slow");
//     } else if (count == 4) {
//       $(".d3").hide("slow");
//       $(".d4").show("slow");
//     } else {
//       count = 1;
//       $(".d4").hide("slow");
//       $(".d1").show("slow");
//     }

//     //click counts
//     $(".clickCount").html(`click: ${count}`);
//   });

//   // *-------------  --------------*/
//   $(".d2").hover(
//     () => {
//       $(".d2").css("color", "red");
//     },

//     () => {
//       $(".d2").css("color", "white");
//     }
//   );

// // *------------- jquery GET fn --------------*/

//   let boxC = 0;
//   $("#box1").click(function () {
//     boxC++;
//     let text = $("#box1").text("Who let the dogs out");
//     console.log(`${text} = ${boxC}`);
//   });

// });

$(document).ready(function () {
  $("#lost2").hide();
  $("#lost3").hide();
  $("#lost4").hide();
  $("#lost5").hide();
  $("#lost6").hide();
  $("#lost7").hide();
  $("#timer").hide();

  let count = 1;

  //timer function
  function countDown(x) {
    let rem = setInterval(() => {
      x--;
      $("#timer").text(x);
      if (x <= 0)
        clearInterval(rem);
    }, 1000);
  }

  //event listeners
  $(".container").click(() => {
    count++;
    if (count == 2) {
      $("#lost1").hide("slow");
      $("#lost2").show("slow");
    }
    if (count == 3) {
      $("#lost2").hide("slow");
      $("#lost3").show("slow");
    }
    if (count == 4) {
      $("#lost3").hide("slow");
      $("#lost4").show("slow");
    }
    if (count == 5) {
      $("#lost4").hide("slow");
      $("#lost5").show("slow");
    }
    if (count == 6) {
      $("#lost5").hide("slow");
      $("#lost6").show("slow");
    }

    if (count == 7) {
      $("#lost6").hide("slow");
      $("#timer").show("slow");
      countDown(5);

      setTimeout(() => {
        $("#timer").hide("slow");
        $("#lost7").show("slow");
      }, 5000);
    }
  });
});
