$(document).ready(function() {
    $(".clickable").click(function() {
      $("#design").toggle();
      $("#clickable").hide();
    });
  });
$(document).ready(function() {
    $(".clickable2").click(function() {
      $("#develop").toggle();
      $("#clickable").hide();
    });
  });
$(document).ready(function() {
    $(".clickable3").click(function() {
      $("#services").toggle();
      $("#clickable").hide();
    });
  });
  $(document).ready(function(){
      $("#sender").click(function(event){
      var name = $("#name").val();
      var email = $("#email").val();
      var message =$("#comment").val();
      if((name != "") || (email != "") || (message != "")) {
          alert(name + " " + "Thanks for your comment! It has been received.")
      }
      else{
          alert(name + " " + "Please, fill the form correctly!")
      }
      event.preventDefault();
  });
  })
  