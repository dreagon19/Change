$(function () {
   

    
    $("#button").click(function () {

        let val = $("#parent p");
        
        let last = val[val.length - 1];
        let text = last.innerText;
        
        let secondLast = val[val.length - 2];
        secondLast.append(` ${text}`);
        
        last.remove();

    });
    


});