$(function () {
    
    $("#validateForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 5,
        },
      },
      messages: {
        name: {
          required: "You will have to give name",
          minlength: "5 se jada",
        },
      },
    });



});