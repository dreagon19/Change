$(function () {
   
    let childPara=$("#para").children();

    childPara.hide();

    let count = 0;
    $(childPara[0]).show();

    $("p").click(function () {
       
        count++;
        if (count < childPara.length) {
             $(childPara[count]).show("slow");
             $(childPara[count - 1]).hide("fast");
        }   
        
    });




});